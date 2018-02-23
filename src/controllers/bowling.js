const Game = require('../bowling/game').default;
const Bowling = require('./../bowling');

function controller (req, res) {
  if (!req.body) return res.sendStatus(400);

  const score = Bowling.getScore(req.body)

  res.json({score}); 
};

module.exports = controller;

