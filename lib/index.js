'use strict'

var createStream = require('./req-stream')

function Totalwind (params) {
  var totalwind = createStream(params)

  totalwind.purchase = {
    particular: {
      boards: totalwind.bind(null, {forum: 48}),
      sails: totalwind.bind(null, {forum: 49}),
      accesories: totalwind.bind(null, {forum: 50}),
      others: totalwind.bind(null, {forum: 52}),
      surf: totalwind.bind(null, {forum: 43}),
      formula: totalwind.bind(null, {forum: 47})
    },

    professional: {
      kawaii: totalwind.bind(null, {forum: 53}),
      magicWave: totalwind.bind(null, {forum: 54}),
      sailboardsGirona: totalwind.bind(null, {forum: 55}),
      weWind: totalwind.bind(null, {forum: 56}),
      windParadise: totalwind.bind(null, {forum: 57}),
      '44boardShop': totalwind.bind(null, {forum: 59}),
      windCenterDenia: totalwind.bind(null, {forum: 60}),
      Point7: totalwind.bind(null, {forum: 62}),
      windSportMedia: totalwind.bind(null, {forum: 61})
    }
  }

  return totalwind
}

module.exports = Totalwind
