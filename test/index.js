'use strict'

const isAbsoluteUrl = require('is-absolute-url')
const should = require('should')

const createClient = require('..')

describe('totalwind-api', function () {
  const client = createClient({
    key: process.env.API_KEY,
    pages: 3
  })

  const stream = client.purchase.particular.boards()

  let count = 0
  let buffer = []

  it('fetch data', function (done) {
    stream.on('data', function (item) {
      console.log(++count, item)
      buffer.push(item)
    })

    stream.on('error', done)

    stream.on('end', function () {
      should(count > 1).be.true()

      buffer.forEach(item => {
        const {title} = item
        describe(title, function () {
          should(item).be.an.Object()

          describe('url', function () {
            ;[
              'link'
            ].forEach(function (prop) {
              it(prop, () => should(isAbsoluteUrl(item[prop])).be.true())
            })
          })

          describe('rest of props', function () {
            it('title', () => should(item.title).be.an.String())
          })
        })
      })
      done()
    })
  })
})
