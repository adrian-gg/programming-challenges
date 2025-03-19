import { emitKeypressEvents } from "readline"

emitKeypressEvents(process.stdin)

if (process.stdin.isTTY) process.stdin.setRawMode(true)

let code = []
let konami = [
  "up",
  "up",
  "down",
  "down",
  "left",
  "right",
  "left",
  "right",
  "b",
  "a",
]

console.log("Introduce el código: ")

process.stdin.on("keypress", (_, key) => {
  code.push(key.name.toUpperCase())

  console.log(key.name.toUpperCase())

  if (code.length === 10) {
    if (code.toString() === konami.toString().toUpperCase()) {
      console.log("¡Conseguido!")
      process.exit()
    } else {
      code.shift()
    }
  }
})
