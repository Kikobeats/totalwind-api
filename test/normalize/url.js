'use strict'

const should = require('should')
const normalizeUrl = require('../../lib/normalize/url')

describe('normalize-url', function () {
  it('convert relative url into absolute url', function () {
    const relativeUrl = './viewtopic.php?f=48&t=100711&sid=512a460b75b1d7e63bb40e81e443482a'

    const absoluteUrl = normalizeUrl(relativeUrl)
    should(absoluteUrl).be.equal('http://totalwind.net/foro/viewtopic.php?f=48&t=100711')
  })
})
