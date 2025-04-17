import React from 'react'

const LaunchItem = ({ launch }) => { // Destructure {launch} prop passed from Launches
  console.log(launch);               // To inspect each launch object 
  return (
    <div>test</div> /* return a placeholder */
  )
}

export default LaunchItem