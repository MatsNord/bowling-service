# bowling-service
A NodeJS bowling service, stateless

It runs on nodejs 8.4.9 - I didn't spend too much time configuring, so there is some work todo, and code to remove

## Install
npm install

## Start
npm start

## Port
It listens on port 3000

## API

POST
/api/play

request

body:
`{frames:[{first: <num>, second: <num>}, {first: <num>, second: <num>} ...]}`  up to ten frames. _As it it stateless you have to play all frames in one post, and follow the rules of bowling_

response:
`{score: <num>}`


up to ten frames. If you play more, you do that on your own risk. Just as it was for real :)


### Start debug
npm run start:inspect

### Basci CORS support installed

## About
This is a little experimental
