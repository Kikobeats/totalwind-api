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

function request (options, cb) {
  return got.get(CONST.ENDPOINT, options, cb)
}

function Request (opts) {
  function fetchStream (query) {
    query = Object.assign({}, DEFAULT.query, query)
    query.wrapAPIKey = opts.key
    var gotOptions = {json: true, query: query}

    var first = true
    var topicPerPage

    function hasFetch () {
      return first || gotOptions.query.start < (opts.pagination * topicPerPage)
    }

    return from(function (size, next) {
      var _this = this

      if (hasFetch()) {
        request(gotOptions, function (err, body) {
          if (err) return next(err)
          if (!body.success) return next(body.messages)

          var topics = body.data.topics

          if (first) {
            first = false
            topicPerPage = topics.length
          }

          var lastTopic = body.data.topics.pop()

          topics.forEach(function (topic) {
            normalize(topic)
            _this.push(topic)
            ++gotOptions.query.start
          })

          ++gotOptions.query.start
          next(null, normalize(lastTopic))
        })
      } else next(null, null)
    })
  }

  return fetchStream
}

function Totalwind (params) {
  var totalwind = Request(params)

  totalwind.purchase = {
    particular: {
      boards: totalwind.bind(null, {forum: 48}),
      sails: totalwind.bind(null, {forum: 49}),
      accesories: totalwind.bind(null, {forum: 50}),
      others: totalwind.bind(null, {forum: 52}),
      surf: totalwind.bind(null, {forum: 43}),
      formula: totalwind.bind(null, {forum: 47})
    },

    professional: {
      kawaii: totalwind.bind(null, {forum: 53}),
      magicWave: totalwind.bind(null, {forum: 54}),
      sailboardsGirona: totalwind.bind(null, {forum: 55}),
      weWind: totalwind.bind(null, {forum: 56}),
      windParadise: totalwind.bind(null, {forum: 57}),
      '44boardShop': totalwind.bind(null, {forum: 59}),
      windCenterDenia: totalwind.bind(null, {forum: 60}),
      Point7: totalwind.bind(null, {forum: 62}),
      windSportMedia: totalwind.bind(null, {forum: 61})
    }
  }

  return totalwind
}

module.exports = Totalwind
