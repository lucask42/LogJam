'use strict'

async = require('async')

module.exports = (logSources, printer) => {



  let hopper = initializeHopper();

  function initializeHopper() {
    let arr = []
    logSources.forEach((element, idx) => {
      insertIntoHopper(arr, element.last.date, idx)
    })
    return arr;
  }

  function insertIntoHopper(arr, date, logSourceId) {
    const item = {
      id: [logSourceId],
      date: [date]
    }
    const index = findNextIndex(arr, date)
    arr.splice(index , 0, item);
  }

  function findNextIndex(arr, date) {

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

  function popFromHopper() {
    hopper.pop();
  }

  function popFromSource(id) {
    printer.print(logSources[id].last)
    async.logSources[id].popAsync();
  }

  function refillHopper(sourceNum) {
    if (logSources[sourceNum].drained === false) {
      insertIntoHopper(hopper, logSources[sourceNum].last.date, sourceNum[0])
    }
  }

// run loop
while (hopper.length > 0) {


  let idFromHopper = hopper[hopper.length-1].id
  popFromHopper(idFromHopper)
  popFromSource(idFromHopper)

  //get number of source popped
  //refill from that source
  // print()
  refillHopper(idFromHopper)
}

// console.log(hopper);
printer.done()






// print out a single logSource
// while (logSources[1].drained !== true) {
// 	printer.print(logSources[1].last)
// 	logSources[1].pop();
// }
//
// printer.done()


}
