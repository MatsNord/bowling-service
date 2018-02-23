import { should } from 'chai';
import Game from '../../src/bowling';
should();

//Unit under test
let  game = {}; new Game();
     
Feature('Bowling Game 2', () => {
    
    Scenario("A player plays a mediocre series", () => {
        Given("there is a bowling game", () => { 
            game = new Game();
            game.should.be.an.instanceOf(Game);
        });
        When("First round", () => {
			game.roll(5);
			game.roll(2);
        });
		And("Second round", () => {	
			game.roll(2);
			game.roll(8);
        });
		And("Third round", () => {	
			game.roll(2);
			game.roll(8);
        });
		And("Forth round", () => {	
			game.roll(8);
			game.roll(2);
        });
		And("Fifth round", () => {	
			game.roll(2);
			game.roll(8);
        });
		And("Sixth round", () => {	
			game.roll(5);
			game.roll(4);
        });
		And("Seventh round", () => {	
			game.roll(10);
        });
		And("Eighth round", () => {	
			game.roll(10);
        });
		And("Nineth round", () => {	
			game.roll(9);
            game.roll(1);
        });
		And("Tenth round", () => {	
			game.roll(2);
			game.roll(8);
            game.roll(8);
        });
        Then('the score should be', () => {
            game.score().should.be.equal(152);
        });
     });

     Scenario("A player plays a perfect game", () => {
        Given("there is a bowling game", () => { 
            game = new Game();
            game.should.be.an.instanceOf(Game);
        });
        When("First round", () => {
			game.roll(10);
        });
		And("Second round", () => {	
			game.roll(10);
        });
		And("Third round", () => {	
			game.roll(10);
        });
		And("Forth round", () => {	
			game.roll(10);;
        });
		And("Fifth round", () => {	
			game.roll(10);
        });
		And("Sixth round", () => {	
			game.roll(10);
        });
		And("Seventh round", () => {	
			game.roll(10);
        });
		And("Eighth round", () => {	
			game.roll(10);
        });
		And("Nineth round", () => {	
			game.roll(10);
        });
		And("Tenth round", () => {	
			game.roll(10);
			game.roll(10);
            game.roll(10);
        });
        Then('the score should be', () => {
            game.score().should.be.equal(300);
        });
     });
    // Some helper methods
    const rollMany = (n, pins) => {
        for (let i = 0; i < n; i++) {
            game.roll(pins);
        }
    }

    const rollSpare = () => {
        game.roll(5);
        game.roll(5);
    }

    const rollStrike = () => {
        game.roll(10);
    }

});


