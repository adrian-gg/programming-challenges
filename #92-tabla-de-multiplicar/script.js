import * as readline from "node:readline/promises"
import { stdin as input, stdout as output } from "node:process"

const rl = readline.createInterface({ input, output })

function m_table(number) {
  if (typeof number !== "number") throw new Error(`${number} is not number`)

  if (number % 1 !== 0) throw new Error(`${number} is not integer`)

  for (let i = 1; i <= 10; i++) {
    let result = number * i
    console.log(`${number} x ${i} = ${result}`)
  }
}

try {
  const n = await rl.question("Give me a number: ")
  m_table(parseInt(n))
} catch (e) {
  console.error(e.message)
} finally {
  rl.close()
}
