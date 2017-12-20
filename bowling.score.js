'use strict'

class Game {
  constructor() {
    this.rolls = []
  }

  roll(pins) {
    this.rolls.push(pins)
  }

  score() {
    let score = 0
    let i = 0
    for (let frame = 0; frame < 10; frame++) {
      const frameScore = this.rolls[i] + this.rolls[i+1]
      score += frameScore  
      if (frameScore == 10) { 
        score += this.rolls[i+2]
      }
      i += 2
    }
    return score
  }
}

module.exports = Game
