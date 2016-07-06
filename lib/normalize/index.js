'use strict'

var normalizeDate = require('./date')
var normalizeLink = require('./link')

function normalize (topic) {
  topic.link = normalizeLink(topic.link)
  topic.createdAt = normalizeDate(topic.createdAt)
  topic.updatedAt = normalizeDate(topic.updatedAt)
  return topic
}

module.exports = normalize
