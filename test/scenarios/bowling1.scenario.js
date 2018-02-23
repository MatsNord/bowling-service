import { should } from 'chai';
import Game from '../../src/bowling';
should();

//Unit under test
let  game = {}; new Game();
     
Feature('Bowling game', () => {
    
    Scenario("A player plays bowling serie 1", () => {
        Given("there is a bowling game", () => { 
            game = new Game();
            game.should.be.an.instanceOf(Game);
        });
        When("the player rolls all balls in the gutter", () => {   
            rollMany(20, 0);
        });
        Then('the score should be', () => {
            game.score().should.be.equal(0);
        });
     });
    Scenario("A player plays bowling serie 2", () => {
        Given("there is a bowling game", () => {
            game = new Game();
            game.should.be.an.instanceOf(Game);
        });
        When("the player plays all ones", () => {   
            rollMany(20, 1);
        });
        Then('the score should be', () => {
            game.score().should.be.equal(20);
        });
     });
    Scenario("A player plays bowling serie 3", () => {
        Given("there is a bowling game", () => {
            game = new Game();
            game.should.be.an.instanceOf(Game);
        });
        When("the player plays a spare and and get point for succeeding roll", () => {   
            rollSpare();
            game.roll(3);
            rollMany(17,0);
        });
        Then('the score should be', () => {
            game.score().should.be.equal(16);
        });
     });
    Scenario("A player plays bowling serie 4", () => {
        Given("there is a bowling game", () => {
            game = new Game();
            game.should.be.an.instanceOf(Game);
        });
        When("the player plays a spare and and get point for succeeding roll", () => {   
            rollStrike();
            game.roll(3);
            game.roll(4);
            rollMany(16, 0);
        });
        Then('the score should be', () => {
            game.score().should.be.equal(24);
        });
     });
    Scenario("A player plays a perfect game", () => {
        Given("there is a bowling game", () => {
            game = new Game();
            game.should.be.an.instanceOf(Game);
        });
        When("the player plays a spare and and get point for succeeding roll", () => {   
            rollMany(12,10);
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


