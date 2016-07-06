'use strict'

/**
 * Original API Date looks into Spanish.
 * Need to convert it into standard Date format.
 */
function normalizeDate (date) {
  var months = {
    'Ene': 'Jan',
    'Feb': 'Feb',
    'Mar': 'Mar',
    'Abr': 'Apr',
    'May': 'May',
    'Jun': 'Jun',
    'Jul': 'Jul',
    'Ago': 'Aug',
    'Sep': 'Sep',
    'Oct': 'Oct',
    'Nov': 'Nov',
    'Dic': 'Dec'
  }

  var days = {
    'Lun': 'Mon',
    'Mar': 'Tue',
    'Mié': 'Wed',
    'Jue': 'Thu',
    'Vie': 'Fri',
    'Sáb': 'Sat',
    'Dom': 'Sun'
  }

  date = date.split(' ')
  date[0] = days[date[0]]
  date[1] = months[date[1]]
  return new Date(date.join(' ')).getTime()
}

module.exports = normalizeDate
