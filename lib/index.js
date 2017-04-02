'use strict'

const createStream = require('./req-stream')

function Totalwind (params) {
  const totalwind = createStream(params)

  totalwind.purchase = {
    particular: {
      boards: totalwind.bind(null, {forum: 48}),
      sails: totalwind.bind(null, {forum: 49}),
      masts: totalwind.bind(null, {forum: 66}),
      booms: totalwind.bind(null, {forum: 64}),
      fins: totalwind.bind(null, {forum: 67}),
      accesories: totalwind.bind(null, {forum: 65}),
      packs: totalwind.bind(null, {forum: 63}),
      others: totalwind.bind(null, {forum: 52})
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
