'use strict'

const Game = require('./bowling.score')

describe('Game score', () => {
    let game;
    beforeEach(() => {
        game = new Game()
    })

    it('A gutter game has a score of 0', () => {
        for (let i=0; i<20; i++) {
            game.roll(0)
        }
        expect(game.score()).toEqual(0)
    })
    
    it('All rolls with one pin has a score of 20', () => {
        for (let i=0; i<20; i++) {
            game.roll(1)
        }
        expect(game.score()).toEqual(20)
    })
})

