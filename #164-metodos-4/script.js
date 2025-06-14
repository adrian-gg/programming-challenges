function once(fn) {
  let called = false
  let result

  return function (...args) {
    const maybeReset = args[args.length - 1]
    const isReset = typeof maybeReset === "boolean"
    const reset = isReset ? maybeReset : false

    if (reset) {
      called = false
      args.pop()
    }

    if (!called) {
      result = fn.apply(this, args)
      called = true
    }

    return result
  }
}

function sayHello(name) {
  console.log("Hola", name)
  return `Saludos a ${name}`
}

const sayHelloOnce = once(sayHello)

console.log(sayHelloOnce("Ana")) // Hola Ana, Saludos a Ana
console.log(sayHelloOnce("Luis")) // → Saludos a Ana
console.log(sayHelloOnce("Luis", true)) // Hola Luis, Saludos a Luis
console.log(sayHelloOnce("Mario")) // → Saludos a Luis
