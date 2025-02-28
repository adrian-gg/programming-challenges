function rockPaperScissorLizardSpock(plays) {
  const rules = {
    "🗿": ["🦎", "✂️"],
    "🦎": ["🖖", "📄"],
    "🖖": ["✂️", "🗿"],
    "✂️": ["📄", "🦎"],
    "📄": ["🗿", "🖖"],
  }
  const players = {
    P1: 0,
    P2: 0,
  }

  plays.forEach((play) => {
    if (play[0] !== play[1])
      rules[play[0]].includes(play[1]) ? (players.P1 += 1) : (players.P2 += 1)
  })

  return players.P1 === players.P2
    ? "Empate"
    : players.P1 > players.P2
    ? "Player 1"
    : "Player 2"
}

console.log(rockPaperScissorLizardSpock([["🗿", "🗿"]])) //Empate
console.log(rockPaperScissorLizardSpock([["🗿", "✂️"]])) //Player 1
console.log(rockPaperScissorLizardSpock([["✂️", "🗿"]])) //Player 2
console.log(
  rockPaperScissorLizardSpock([
    ["🗿", "🗿"],
    ["🗿", "🗿"],
    ["🗿", "🗿"],
    ["🗿", "🗿"],
  ])
) //Empate
console.log(
  rockPaperScissorLizardSpock([
    ["🖖", "🗿"],
    ["✂️", "📄"],
    ["🗿", "🗿"],
    ["🦎", "🖖"],
  ])
) //Player 1
console.log(
  rockPaperScissorLizardSpock([
    ["🗿", "✂️"],
    ["✂️", "🗿"],
    ["📄", "✂️"],
  ])
) //Player 2
