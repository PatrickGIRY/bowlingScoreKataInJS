'use strict'

const Game = require('./bowling.score')

describe('Game score', () => {
    let game;
    beforeEach(() => {
        game = new Game()
    })

    it('A gutter game has a score of 0', () => {
        rollMany(20, 0)
        expect(game.score()).toEqual(0)
    })

    const rollMany = (n, pins) => {
        for (let i=0; i<n; i++) {
            game.roll(pins)
        }
    }
    
    it('All rolls with one pin has a score of 20', () => {
        rollMany(20, 1)
        expect(game.score()).toEqual(20)
    })

    it('One spare has score of 16', () => {
        rollSpare()
        game.roll(3)
        rollMany(17, 0)
        expect(game.score()).toEqual(16)
    })

    const rollSpare = () => {
      game.roll(5)
      game.roll(5)
    }
    
    it('One strike has score of 24', () => {
        game.roll(10)
        game.roll(3)
        game.roll(4)
        rollMany(16, 0)
        expect(game.score()).toEqual(24)
    })

})

