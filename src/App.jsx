import { useState } from 'react'
import './App.css'
import logo from './logo.png' // Import logo image

function App() {
  return (
    <div className="App">
      {/* Show SpaceX logo */}
      <img 
        src={logo} 
        alt="SpaceX"
        style={{ width: 300, display: 'block', margin: 'auto' }} 
      />
    </div>
  )
}

export default App
