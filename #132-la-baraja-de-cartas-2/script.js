class Card {
  constructor(rank, suit) {
    const suitSymbols = {
      spades: "♠",
      hearts: "♥",
      clubs: "♣",
      diamonds: "♦",
    }
    const symbol = suitSymbols[suit]
    const id = `${rank}${symbol}`
    this.id = id

    this.rank = rank
    this.suit = suit

    const specialRanks = { A: 1, J: 11, Q: 12, K: 13 }
    const value = specialRanks[rank] || parseInt(rank)
    this.value = value

    const color = suit === "hearts" || suit === "diamonds" ? "red" : "black"
    this.color = color
  }

  toString() {
    return `${this.rank}${this.getSuitSymbol()} (${this.color})`
  }

  getSuitSymbol() {
    const symbols = {
      spades: "♠",
      hearts: "♥",
      clubs: "♣",
      diamonds: "♦",
    }
    return symbols[this.suit] || ""
  }
}

class Deck {
  constructor() {
    this.cards = []
    this.__init__()
  }

  __init__() {
    const suits = ["spades", "hearts", "clubs", "diamonds"]
    const specialRanks = { 1: "A", 11: "J", 12: "Q", 13: "K" }

    for (const suit of suits) {
      for (let i = 1; i <= 13; i++) {
        const rank = specialRanks[i] || i.toString()
        this.cards.push(new Card(rank, suit))
      }
    }
  }

  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]]
    }
    return this.cards
  }

  draw(n = 1) {
    let numDrawCards = Math.min(n, this.cards.length)
    return this.cards.splice(0, numDrawCards)
  }

  addCard(card) {
    if (this.contains(card)) return
    this.cards.push(card)
  }

  reset() {
    this.cards = []
    this.__init__()
  }

  isEmpty() {
    return this.cards.length === 0
  }

  size() {
    return this.cards.length
  }

  peek(n = 1) {
    let numPeekCards = Math.min(n, this.cards.length)
    return this.cards.slice(0, numPeekCards)
  }

  removeCard(card) {
    const index = this.cards.findIndex((c) => c.id === card.id)
    if (index !== -1) {
      return this.cards.splice(index, 1)
    }
    return null
  }

  contains(card) {
    return this.cards.some((c) => c.id === card.id)
  }
}

const deck = new Deck()

console.log(deck.cards.map((c) => c.toString()))

deck.shuffle()

console.log(deck.size())
console.log(deck.draw(3).map((c) => c.toString()))
console.log(deck.size())
console.log(deck.peek(1).map((c) => c.toString()))
console.log(deck.size())

deck.addCard(new Card("3", "diamonds"))
deck.addCard(...deck.draw())

console.log(deck.cards.map((c) => c.toString()))
