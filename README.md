## Background

The app created for the Fetch Rewards Coding Exercise - Backend Software Engineering

The app accepts two strings and returns which of the two is higher or lower.

To examine the backend follow:
/server/api/version.js
/server/db/models/version.js

To examine the frontend follow:
/client/components/version-evaluater.js

## Setup

This app was set up with an `express`/`sequelize` backend and a `react` frontend.

To use this code you will need to have PostgreSQL installed on your machine.

After forking the repo run

createdb fetch-backend-exercise
npm install
npm run start-dev

Alternatively if you want to run the server and/or `webpack` separately, you can also
`npm run start-server` and `npm run build-client`.
