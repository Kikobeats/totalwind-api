'use strict'

const url = require('url')
const qsm = require('qsm')

const CONST = require('../constants')

/**
 * Links are relative. Need to convert it into absolute paths.
 */
function normalizeUrl (link) {
  const newLink = qsm.remove(link, 'sid')
  return url.resolve(CONST.ROOT, newLink)
}

module.exports = normalizeUrl
