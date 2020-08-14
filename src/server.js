import { ApolloServer } from 'apollo-server'
import { schema } from './schema'
import { createContext } from './context'
import * as dotenv from 'dotenv'

dotenv.config()

new ApolloServer({ 
  schema, context: createContext,
  engine: {
    reportSchema: true
  }
})
// .listen( { port: process.env.PORT || 4000}, () =>
//   console.log(
//     `🚀 Server ready at: http://localhost:${process.env.PORT}`,
//   ),
// )
.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});