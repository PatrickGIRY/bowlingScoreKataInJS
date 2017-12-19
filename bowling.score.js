'use strict'

class Game {
  constructor() {
    this.rolls = []
  }

  roll(pins) {
    this.rolls.push(pins)
  }

  score() {
    return this.rolls.reduce((score, roll) => score + roll, 0)
  }
}

module.exports = Game
