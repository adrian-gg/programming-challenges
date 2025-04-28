# Reto #117: La baraja de cartas

#### Dificultad: Facil

## Enunciado

Crea una clase llamada Deck que devuelva una baraja de cartas francesa (52 cartas)
Cada carta (otra clase llamada Card) dispondrá de su id (compuesto por su rango y el símbolo del palo), rango, valor, palo y color.

Ejemplo:

```
const deck = new Deck();
console.log(deck.cards)

[
  ...
  Card { id: 'A♠', rank: 'A', value: 1, suit: 'spades', color: 'black' }
  Card { id: '2♠', rank: '2', value: 2, suit: 'spades', color: 'black' }
  ...
  Card { id: 'K♠', rank: 'K', value: 13, suit: 'spades', color: 'black' }
  ...
]
```
