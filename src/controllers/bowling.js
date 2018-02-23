const Game = require('../bowling/game').default;

function fill(nbr) {
  const filler = [];
  for (let i = 0; i < nbr; i++) {
    filler.push({first: 0, second: 0})
  }
  return filler;
}

function controller (req, res) {
  const game = new Game(); 
  const reducer = ( fn ) => ( score, frame, idx, frames ) => {
    fn.roll(frame.first);
    fn.roll(frame.second);
    return idx !== 9 ? score : score + fn.score();
  };
  const gameReducer = reducer(game);

  if (!req.body) return res.sendStatus(400);
    console.log(req.body);

    const { frames } = req.body;
    const length = frames.length;
    const fullSeries = [...frames, ...fill(10-length)];
    const score = fullSeries.reduce( gameReducer , 0);

    res.json({score}); 
};

module.exports = controller;

