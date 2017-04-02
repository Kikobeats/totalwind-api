'use strict'

const normalizeURL = require('./url')

function normalize (topic) {
  return Object.assign({}, topic, {
    link: normalizeURL(topic.link)
  })
}

module.exports = normalize
