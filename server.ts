import * as dotenv from 'dotenv'
import * as express from 'express'
import * as cors from 'cors'
import { ApolloServer } from 'apollo-server-express'

// graphql
import typeDefs from './schema/schema'
import resolvers from './resolvers/resolvers'

dotenv.config();

// env strings
const port = process.env.PORT || 4000

// instantiate the apollo server
const server = new ApolloServer({ 
    typeDefs, 
    resolvers,
    tracing: true
});

// instantiate the express app after the apollo server
const app = express();

// middleware
app.use(cors())
app.use(express.json())
server.applyMiddleware({ 
    app
});

app.listen(port, () => {
    // connect to database when server starts
    console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`)
})
