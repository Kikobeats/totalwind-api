'use strict'

const normalizeURL = require('./url')

function normalize (topic) {
  const {title, link} = topic

  return Object.assign({title}, {
    link: normalizeURL(link)
  })
}

module.exports = normalize
