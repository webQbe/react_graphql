import { useState } from 'react'
import { ApolloClient, InMemoryCache, HttpLink, ApolloProvider } from '@apollo/client';
import Launches from './components/Launches'
import './App.css'
import logo from './logo.png' // Import logo image

// Create a GraphQL client pointing to backend
const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:5000/graphql' }),
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider 
      client={client} /* Wraps the app & provide the client to all components */
    > {/* Any component inside <ApolloProvider> can make GraphQL queries */}

      <div className="container">

        {/* Show SpaceX logo */}
        <img 
          src={logo} 
          alt="SpaceX"
          style={{ width: 300, display: 'block', margin: 'auto' }} 
        />

        <Launches /> {/* Render Launches.jsx */}

      </div>

    </ApolloProvider>
  )
}

export default App
