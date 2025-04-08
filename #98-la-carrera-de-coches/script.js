const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min

function race(props) {
  const { players, trackLength, trees, playerSpeed, speed } = props
  const PLAYERS = []
  const BLOKS = {
    road: "⬛",
    tree: "🌲",
    goal: "🏁",
    crash: "💥",
  }

  const setPlayers = () => {
    players.forEach((player) => {
      const numTrees = getRandomNumber(trees === 0 ? 0 : 1, trees)
      let track = [
        ...new Array(numTrees).fill(BLOKS.tree),
        ...new Array(trackLength - numTrees).fill(BLOKS.road),
      ]

      track = track.sort(() => Math.random() - 0.5)
      track.unshift(BLOKS.goal)
      track.push(player)

      PLAYERS.push({
        car: player,
        track,
        crash: false,
      })
    })
  }

  function rebroadcastRace() {
    console.clear()
    PLAYERS.forEach((player) => console.log(player.track.join("")))
  }

  function move() {
    let winner = []

    setTimeout(() => {
      PLAYERS.forEach((player) => {
        if (player.crash) {
          player.crash = false
        } else {
          const carMove = getRandomNumber(1, playerSpeed)
          const carPosition = player.track.indexOf(
            player.track.includes(player.car) ? player.car : BLOKS.crash
          )
          player.track.splice(
            carPosition,
            1,
            player.track.includes(player.car) ? BLOKS.road : BLOKS.crash
          )
          let crashed =
            player.track[Math.max(0, carPosition - carMove)] === BLOKS.tree
          player.track.splice(
            Math.max(0, carPosition - carMove),
            1,
            crashed ? BLOKS.crash : player.car
          )

          if (crashed) player.crash = true
          if (Math.max(0, carPosition - carMove) === 0) winner.push(player.car)
        }
      })

      rebroadcastRace()

      if (winner.length === 0) {
        move()
      } else {
        if (winner.length === 1) console.log(`El ganador es: ${winner[0]}`)
        else console.log(`Los jugadores (${winner.join(" ")}) han empatado.`)
      }
    }, speed)
  }

  setPlayers()
  rebroadcastRace()
  move()
}

race({
  players: ["🚙", "🚗", "🚕", "🚓", "🚐", "🛵", "🦽", "🚜", "🛸"],
  trackLength: 40,
  trees: 3,
  playerSpeed: 2, //tiles per move
  speed: 250, //ms
})
