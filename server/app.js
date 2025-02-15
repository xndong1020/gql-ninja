// This imports the Express module into your project.
// Express is a minimal and flexible Node.js web application framework
// that helps in handling HTTP requests, routing, middleware, etc.
const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')

// To create an Express application instance by calling express().
// The app object that is created is used to configure your routes, middlewares, and server behavior.
const app = express()

// connect to mongodb database
mongoose.connect(
  'mongodb+srv://xndong1020:YbpRQqD4ZOPeJc7v@gql-ninja.j9zek.mongodb.net/?retryWrites=true&w=majority&appName=gql-ninja'
)
mongoose.connection.on('open', () => {
  console.log('connected to database')
})

app.use('/graphql', graphqlHTTP({ schema, graphiql: true }))

// Finally, you can start the server with:
app.listen(4000, () => {
  console.log('now listening for requests on port 4000')
})
