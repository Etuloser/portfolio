import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_HYGRAPH_URL,
})
const writeLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_WRITE_HYGRAPH_URL,
})

const authLink = setContext((_, { headers }) => {
  const token = process.env.NEXT_PUBLIC_AUTH_TOKEN
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    }
  }
})

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({

  })
})

export const writeClient = new ApolloClient({
  link: authLink.concat(writeLink),
  cache: new InMemoryCache({

  })
})

export default client