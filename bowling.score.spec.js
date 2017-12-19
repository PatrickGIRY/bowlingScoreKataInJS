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
})

