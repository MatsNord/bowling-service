import { expect, should } from 'chai';
should();
import Game from '../../src/bowling/game';


describe("Bowling Game", () => {

    let game;
    const rollMany = ( n, pins ) => {
        for( let i = 0; i < n; i++ ){
            game.roll( pins ); 
        }
    }

    const rollSpare = () => {
        game.roll(5);
        game.roll(5);
    }

    const rollStrike = () => {
        game.roll(10);
    }

    beforeEach(()=> {
     game = new Game();
   
    });

    it("should count no scores on gutter rolls", () => {
        rollMany(20, 0);
        expect(game.score()).eql( 0 );; 
    });

    it("should count one point for every pin if no spare or strike bonus",  () => {
       rollMany(20, 1);
        expect( game.score()).to.equals( 20 );; 
    });

    it("should give bonus on one spare",  () => {
        rollSpare();
        game.roll(3);
        rollMany(17,0);
        expect( game.score()).to.equals( 16 );; 
    });

    it("should give bonus on one strike", () => {
        rollStrike();
        game.roll(3);
        game.roll(4);
        rollMany(16, 0);
        expect( game.score()).to.equals( 24 );
    });

   it("should give highest score on perfect game", () => {
        rollMany(12,10);
        expect( game.score()).to.equals( 300 );; 
  });

});