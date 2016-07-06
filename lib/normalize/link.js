'use strict'

var decodeHTML = require('entities').decode
var CONST = require('../constants')
var path = require('path')

/**
 * Links are relative. Need to convert it into absolute paths.
 */
function normalizeLink (link) {
  link = decodeHTML(link.replace(CONST.REGEX_SID, ''))
  link = path.join(CONST.ROOT, link)
  return link
}

module.exports = normalizeLink
