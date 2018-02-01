# bth_ramverk2 - react_Express_frontend

[![Build Status](https://travis-ci.org/Zero2k/bth_ramverk2_frontend.svg?branch=master)](https://travis-ci.org/Zero2k/bth_ramverk2_frontend)
[![BCH compliance](https://bettercodehub.com/edge/badge/Zero2k/bth_ramverk2_frontend?branch=master)](https://bettercodehub.com/)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/Zero2k/bth_ramverk2_frontend/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/Zero2k/bth_ramverk2_frontend/?branch=master)
[![Build Status](https://scrutinizer-ci.com/g/Zero2k/bth_ramverk2_frontend/badges/build.png?b=master)](https://scrutinizer-ci.com/g/Zero2k/bth_ramverk2_frontend/build-status/master)

## Dependencies

 * [node.js](https://nodejs.org/en/)
 * [react.js](https://reactjs.org/)
 * [semantic-ui](https://react.semantic-ui.com/)
 * [docker](https://docs.docker.com/engine/installation/)
 * [docker-compose](https://docs.docker.com/compose/install/)

## To start the app
```bash
- FRONTEND
1. git clone https://github.com/Zero2k/bth_ramverk2_frontend frontend
2. cd frontend
3. yarn - install dependencies
4. yarn start - start the frontend
# Production
(Change localhost to server ip in apollo.js)
5. yarn start:production

- DOCKER
# Development
docker-compose up development
# Production
docker-compose up frontend
```

## Further documentation

### About

All code in this repo is used to create my frontend for my so called "Me-page" for the course Ramverk2 at Blekinge Institute of Technology. The frontend is built with React.js, Semantic UI and Apollo-Client (GraphQL). 

### Tests

```bash
TEST WITHOUT DOCKER

yarn test - The command will run the tests located in /tests.
```

```bash
TEST WITH DOCKER (require docker)

yarn test:docker - This will run the tests in a Docker container.
```
