'use strict'

var normalize = require('./normalize')
var CONST = require('./constants')
var from = require('from2').obj
var got = require('got')

var DEFAULT = {
  query: {
    start: 0
  }
}

function request (opts) {
  return got.get(CONST.ENDPOINT, opts)
}

function createStream (opts) {
  function reqStream (query) {
    query = Object.assign({}, DEFAULT.query, query)
    query.wrapAPIKey = opts.key

    var reqOptions = {json: true, query: query}
    var first = true
    var topicPerPage

    function hasFetch () {
      return first || reqOptions.query.start < (opts.pages * topicPerPage)
    }

    return from(function (size, next) {
      if (hasFetch()) {
        request(reqOptions)
          .then(res => {
            var {body} = res
            if (!body.success) return next(body.messages)

            var topics = body.data.topics

            if (first) {
              first = false
              topicPerPage = topics.length
            }

            var lastTopic = body.data.topics.pop()

            topics.forEach(topic => {
              normalize(topic)
              this.push(topic)
              ++reqOptions.query.start
            })

            ++reqOptions.query.start
            next(null, normalize(lastTopic))
          })
          .catch(next)
      } else next(null, null)
    })
  }

  return reqStream
}

module.exports = createStream
