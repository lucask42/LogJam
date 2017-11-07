'use strict'

module.exports = (hopper, date, whichLogSource) => {
  const index = require('./find-insertion-index.js')(hopper, date)
  const item = {
    id: [whichLogSource],
    date: [date]
  }
  hopper.splice(index, 0, item)
}
