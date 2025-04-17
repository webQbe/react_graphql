import { useState } from 'react'
import { ApolloClient, InMemoryCache, HttpLink, ApolloProvider } from '@apollo/client'
import { 
          BrowserRouter as Router, // (Aliased as Router) Wraps your app and enables routing
          Routes, // Container for your individual route definitions
          Route   // Defines individual paths in your app
        } from 'react-router-dom'

import Launches from './components/Launches'
import Launch from './components/Launch'
import './App.css'
import logo from './logo.png' // Import logo image

// Create a GraphQL client pointing to backend
const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:5000/graphql' }),
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider 
      client={client} /* Wraps the app & provide the client to all components */
    > 
      <Router>

        <div className="container">

          {/* Show SpaceX logo */}
          <img 
            src={logo} 
            alt="SpaceX"
            style={{ width: 300, display: 'block', margin: 'auto' }} 
          />

          {/* Route definitions */}
          <Routes>

            <Route 
              exact path='/' 
              element={<Launches />}  
              /* When the URL is /, render <Launches /> component. */
            />

            <Route 
              exact path='/launch/:flight_number' 
              element={<Launch />} 
              /* When the URL is something like /launch/42, render <Launch /> component. */
            />

          </Routes>

        </div>

      </Router>

    </ApolloProvider>
  )
}

export default App
