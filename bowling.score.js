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
    let frameIndex = 0
    for (let frame = 0; frame < 10; frame++) {
        let frameScore
        let rollScore = this.rolls[frameIndex]
        if (isStrike(rollScore)) {
           frameScore = 10 + strikeBonus(this.rolls, frameIndex)
           frameIndex++
        }
        else {
           frameScore = rollScore + this.rolls[frameIndex+1]
           if (isSpare(frameScore)) { 
              score += spareBonus(this.rolls, frameIndex)
           }
           frameIndex += 2
        }
        score += frameScore  
    }
    return score
  }

}

const isSpare = frameScore => frameScore == 10

const isStrike = roll => roll == 10

const strikeBonus = (rolls, frameIndex) => rolls[frameIndex+1] + rolls[frameIndex+2]

const spareBonus = (rolls, frameIndex) => rolls[frameIndex+2]

module.exports = Game
