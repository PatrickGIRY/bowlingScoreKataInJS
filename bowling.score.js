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
        let frameScore
        if (isStrike(this.rolls[i])) {
           frameScore = this.rolls[i] + this.rolls[i+1] + this.rolls[i+2]
           i++
        }
        else {
           frameScore = this.rolls[i] + this.rolls[i+1]
           if (isSpare(frameScore)) { 
              score += this.rolls[i+2]
           }
           i += 2
        }
        score += frameScore  
    }
    return score
  }

}

const isSpare = frameScore => frameScore == 10
const isStrike = roll => roll == 10

module.exports = Game
