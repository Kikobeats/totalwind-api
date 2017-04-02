/* global it */

'use strict'

require('should')

var Totalwind = require('..')
var isUrl = require('is-url-superb')

it('works fine', function (done) {
  var totalwind = Totalwind({
    key: process.env.API_KEY,
    pages: 3
  })

  var topics = totalwind.purchase.particular.boards()

  var count = 0

  topics.on('data', function (data) {
    console.log(++count, data)
    data.should.be.an.Object()
    data.should.have.property('title')
    data.should.have.property('link')
    isUrl(data.link).should.be.true()
    data.should.have.property('createdAt').which.is.a.Number()
    data.should.have.property('updatedAt').which.is.a.Number()
  })

  ;['end', 'error'].forEach(function (event) {
    topics.on(event, done)
  })
})
