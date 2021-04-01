import { createWithApollo } from '@utils/graphql/createWithApollo'
import { ApolloClient, InMemoryCache } from '@apollo/client'

const createClient = () =>
  new ApolloClient({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_API_URL as string,
    cache: new InMemoryCache()
  })

const withApollo = createWithApollo(createClient)

export default withApollo
