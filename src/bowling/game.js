class Game {

  constructor() {
    this.rolls = [];
    this.currentRoll = 0;
  }

  roll(pins) {
    this.rolls[ this.currentRoll++ ] = pins;
  }

  score() {
    let points = 0;
    let frameIndex = 0;
    for (let frame = 0; frame < 10; frame++) {

      if ( this.isStrike( frameIndex )) {
        points += (10 + this.strikeBonus( frameIndex ));
        frameIndex++;

      } else if ( this.isSpare( frameIndex ) ) {
        points += (10 + this.spareBonus( frameIndex ));
        frameIndex += 2;

      } else {
        points += (this.sumOfBallsInFrame( frameIndex ));
        frameIndex += 2;
      }

    }
    return points;
  }

  isStrike(frameIndex) {
    return this.rolls[frameIndex] === 10;
  }

  sumOfBallsInFrame( frameIndex ) {
    return (this.rolls[frameIndex] + this.rolls[frameIndex + 1]);
  }

  spareBonus(frameIndex) {
    return this.rolls[frameIndex + 2];
  }

  strikeBonus(frameIndex) {
    return this.rolls[frameIndex + 1] + this.rolls[frameIndex + 2];
  }

  isSpare(frameIndex) {
    return this.rolls[frameIndex] + this.rolls[frameIndex + 1] === 10;
  }
}

//module.exports = Game;
 export default Game;
