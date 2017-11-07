'use strict'

module.exports = (arr, date) => {
  if (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      if (date >= arr[i].date[0]){
        return i
      }
    }
    return arr.length
  }
  return 0
}
