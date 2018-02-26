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


### Start debug
npm run start:inspect

### Basci CORS support installed

## About
This is a little experimental


#Static content
There is a virtual path `/bowling` mapped to the directory /src/static. The `deployed-static` has an Angular 5 App deployed that can be used to test the service.
