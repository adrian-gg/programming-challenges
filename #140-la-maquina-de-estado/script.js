const STATES = {
  red: {
    next: "green",
    light: "🔴",
    duration: 4000,
  },
  green: {
    next: "yellow",
    light: "🟢",
    duration: 3000,
  },
  yellow: {
    next: "red",
    light: "🟡",
    duration: 1000,
  },
}

const Semaforo = {
  state: "red",

  printState() {
    console.clear()
    console.log(STATES[this.state].light)
  },

  changeState() {
    this.state = STATES[this.state].next
    this.printState()
  },
}

function setState() {
  setTimeout(() => {
    Semaforo.changeState()
    setState()
  }, STATES[Semaforo.state].duration)
}

Semaforo.printState()
setState()
