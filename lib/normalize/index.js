'use strict'

var normalizeDate = require('./date')
var normalizeURL = require('./url')

function normalize (topic) {
  topic.link = normalizeURL(topic.link)
  topic.createdAt = normalizeDate(topic.createdAt)
  topic.updatedAt = normalizeDate(topic.updatedAt)
  return topic
}

module.exports = normalize
