const Game = require('../bowling/game').default;

function fill(nbr) {
  const filler = [];
  for (let i = 0; i < nbr; i++) {
    filler.push({first: 0, second: 0})
  }
  return filler;
}

const getScore = ({frames}) => {
  const game = new Game(); 
  const reducer = ( fn ) => ( score, frame, idx, frames ) => {
    fn.roll(frame.first);
    fn.roll(frame.second);
    return idx !== 9 ? score : score + fn.score();
  };
  const gameReducer = reducer(game);

  const length = frames.length;
  const fullSeries = [...frames, ...fill(10-length)];
  return fullSeries.reduce( gameReducer , 0);
}

module.exports = { getScore };






