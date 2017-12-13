'use strict'

const Game = require('./bowling.score')

describe('Game score', () => {
    it('A gutter game has a score of 0', () => {
        let game = new Game()
        for (let i=0; i<20; i++) {
            game.roll(0)
        }
        expect(game.score()).toEqual(0)
    })
})

