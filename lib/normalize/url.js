'use strict'

var decodeHTML = require('entities').decode
var CONST = require('../constants')
var url = require('url')

/**
 * Links are relative. Need to convert it into absolute paths.
 */
function normalizeLink (link) {
  link = decodeHTML(link.replace(CONST.REGEX_SID, ''))
  return url.resolve(CONST.ROOT, link)
}

module.exports = normalizeLink
