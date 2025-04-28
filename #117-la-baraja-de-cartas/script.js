class Card {
  constructor(id, rank, value, suit, color) {
    this.id = id
    this.rank = rank
    this.value = value
    this.suit = suit
    this.color = color
  }
}

class Deck {
  constructor() {
    this.cards = []
    const suits = ["spades", "hearts", "clubs", "diamonds"]
    const suitSymbols = {
      spades: "♠",
      hearts: "♥",
      clubs: "♣",
      diamonds: "♦",
    }
    const specialRanks = { 1: "A", 11: "J", 12: "Q", 13: "K" }

    for (const suit of suits) {
      for (let value = 1; value <= 13; value++) {
        const rank = specialRanks[value] || value.toString()
        const symbol = suitSymbols[suit]
        const id = `${rank}${symbol}`
        const color = suit === "hearts" || suit === "diamonds" ? "red" : "black"

        this.cards.push(new Card(id, rank, value, suit, color))
      }
    }
  }
}

const deck = new Deck()
console.log(deck.cards)
console.log(deck.cards[0])
console.log(deck.cards.map((card) => card.id))
