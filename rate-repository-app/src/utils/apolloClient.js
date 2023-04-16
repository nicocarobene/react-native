import { ApolloClient, InMemoryCache } from '@apollo/client'

const createApolloServer = () => {
  return new ApolloClient({
    // Provide required constructor fields
    cache: new InMemoryCache(),
    uri: 'http://192.168.1.131:4000/',

    // Provide some optional constructor fields
    name: 'react-web-client',
    version: '1.3',
    queryDeduplication: false,
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-and-network'
      }
    }
  })
}
export default createApolloServer
