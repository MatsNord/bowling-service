const Game = require('../bowling/game').default;

const fill = (nbr) => {
  const filler = [];
  for (let i = 0; i < nbr; i++) {
    filler.push({first: 0, second: 0})
  }
  return filler;
}

const fillSeries = (frames) => {
  const length = frames.length;
  return [...frames, ...fill(10-length)];
}

const getGameReducer = () => {
  const game = new Game(); 
  const reducer = ( fn ) => ( score, frame, idx, frames ) => {
    fn.roll(frame.first);
    fn.roll(frame.second);
    return idx !== 9 ? score : score + fn.score();
  };
  return reducer(game);
}

const getScore = ({frames}) => {
  const gameReducer = getGameReducer();
  return fillSeries(frames).reduce( gameReducer , 0);
}

module.exports = { getScore };






