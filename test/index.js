/* global it */

'use strict'

require('should')
var Totalwind = require('..')

it('works fine', function (done) {
  var totalwind = Totalwind({
    key: process.env.API_KEY,
    pagination: 3
  })

  // var topics = totalwind({forum: 48})
  var topics = totalwind.purchase.particular.boards()

  var count = 0

  topics.on('data', function (data) {
    data.should.be.an.Object()
    data.should.have.property('title')
    data.should.have.property('link')
    data.should.have.property('createdAt').which.is.a.Date()
    data.should.have.property('updatedAt').which.is.a.Date()
    console.log(++count + ':', data.title)
  })

  topics.on('end', done)
})
