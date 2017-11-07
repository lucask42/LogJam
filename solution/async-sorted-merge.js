'use strict'

module.exports = (logSources, printer) => {

  let hopper = initializeHopper()

  function initializeHopper() {
    let arr = []
    logSources.forEach((element, idx) => {
      require('./lib/insert-into-hopper')(arr, element.last.date, idx)
    })
    return arr
  }

  function popFromHopper() {
    hopper.pop()
  }

  function printFromSource(id) {
    printer.print(logSources[id].last)
  }

  function refillHopper(sourceNum) {
    if (logSources[sourceNum].drained === false) {
      require('./lib/insert-into-hopper')(hopper, logSources[sourceNum].last.date, sourceNum[0])
    }
  }

  // run loop
  while (hopper.length > 0) {
    let sourceId = hopper[hopper.length-1].id
    popFromHopper()
    printFromSource(sourceId)
    // pop from appropriate log source and then refill hopper from same source
    logSources[sourceId].popAsync()
      .then(refillHopper(sourceId))
  }

  printer.done()

}
