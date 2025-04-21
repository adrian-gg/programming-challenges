function cancellable(fn, args, t) {
  let count = 0

  function runFn() {
    const result = fn(...args)
    console.log({ time: t * count, returned: result })
    count++
  }

  runFn()

  const intervalId = setInterval(() => {
    runFn()
  }, t)

  return function cancelFn() {
    clearTimeout(intervalId)
  }
}

const fn1 = (x) => x * 2

const args1 = [4]
const t1 = 35
const cancelTimeMs1 = 190

const cancelFn1 = cancellable(fn1, args1, t1)
setTimeout(cancelFn1, cancelTimeMs1)
/*
{ time: 0, returned: 8 }
{ time: 35, returned: 8 }
{ time: 70, returned: 8 }
{ time: 105, returned: 8 }
{ time: 140, returned: 8 }
{ time: 175, returned: 8 }
 */

const fn2 = (x1, x2) => x1 * x2
const args2 = [2, 5]
const t2 = 30
const cancelTimeMs2 = 165

const cancelFn2 = cancellable(fn2, args2, t2)
setTimeout(cancelFn2, cancelTimeMs2)
/*
{ time: 0, returned: 10 },
{ time: 30, returned: 10 },
{ time: 60, returned: 10 },
{ time: 90, returned: 10 },
{ time: 120, returned: 10 },
{ time: 150, returned: 10 }
*/

const fn3 = (x1, x2, x3) => x1 + x2 + x3
const args3 = [5, 1, 3]
const t3 = 50
const cancelTimeMs3 = 180

const cancelFn3 = cancellable(fn3, args3, t3)
setTimeout(cancelFn3, cancelTimeMs3)
/*
{ time: 0, returned: 9 },
{ time: 50, returned: 9 },
{ time: 100, returned: 9 },
{ time: 150, returned: 9 }
*/
