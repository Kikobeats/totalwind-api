/* global it */

'use strict'

require('should')
var Totalwind = require('..')

it('works fine', function (done) {
  var totalwind = Totalwind({
    key: process.env.API_KEY,
    pages: 3
  })

  var topics = totalwind.purchase.particular.boards()

  var count = 0

  topics.on('data', function (data) {
    data.should.be.an.Object()
    data.should.have.property('title')
    data.should.have.property('url')
    data.should.have.property('createdAt').which.is.a.Number()
    data.should.have.property('updatedAt').which.is.a.Number()
    console.log(++count + ':', data.title)
  })

  ;['end', 'error'].forEach(function (event) {
    topics.on(event, done)
  })
})
