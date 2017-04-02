'use strict'

const normalize = require('./normalize')
const CONST = require('./constants')
const from = require('from2').obj
const got = require('got')

const DEFAULT = {
  query: {
    start: 2
  }
}

function request (opts) {
  return got.get(CONST.ENDPOINT, opts)
}

function createStream (opts) {
  function reqStream (query) {
    query = Object.assign({}, DEFAULT.query, query)
    query.wrapAPIKey = opts.key

    const reqOptions = {json: true, query: query}
    let first = true
    let topicPerPage

    function hasFetch () {
      return first || reqOptions.query.start < (opts.pages * topicPerPage)
    }

    return from(function (size, next) {
      if (hasFetch()) {
        request(reqOptions)
          .then(res => {
            const body = res.body
            if (!body.success) return next(body.messages)

            const topics = body.data.topics

            if (first) {
              first = false
              topicPerPage = topics.length
            }

            const lastTopic = body.data.topics.pop()

            topics.forEach(topic => {
              topic = normalize(topic)
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
