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
      if (isSpare(frameScore)) { 
        score += this.rolls[i+2]
      }
      i += 2
    }
    return score
  }

}

const isSpare = frameScore => frameScore == 10

module.exports = Game
