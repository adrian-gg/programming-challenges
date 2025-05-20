# Reto #140: La máquina de estado

#### Dificultad: Dificil

## Enunciado

Crea una máquina de estado que simula un semaforo. El cambio de estado ha de realizarse despues de un intervalo de tiempo definido por la constante STATES.

```
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
```
