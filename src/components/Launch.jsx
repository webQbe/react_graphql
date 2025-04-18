import React from 'react'
import { gql, useQuery } from '@apollo/client'  // for making the GraphQL query
import { Link, useParams } from 'react-router-dom'
import classNames from 'classnames'             // for applying conditional CSS classes

// Define parameterized query
/* "Give me the launch with a specific flight_number." */
const LAUNCH_QUERY = gql` 
    query LaunchQuery($flight_number: Int!) {
        launch(flight_number: $flight_number) {
            flight_number
            mission_name
            launch_year
            launch_success
            launch_date_local,
            rocket {
                rocket_id
                rocket_name
                rocket_type
            }
        }
    }
`

const Launch = () => {

    // Grab flight_number from the URL
    let { flight_number } = useParams()

    /* Call useQuery with Variables */
    const { loading, error, data } = useQuery(LAUNCH_QUERY, {
        // Convert flight_number to int & pass it to GraphQL query via variables
        variables: { flight_number: parseInt(flight_number) }
    })

    /* Loading & Error Handling */
    if (loading) return <h4>Loading...</h4>
    if (error) console.log(error)

    /* Destructure data.launch object directly */
    const {
        // Pull out top-level values
        mission_name,
        launch_year,
        launch_success,
        // Destructure nested rocket object
        rocket: { rocket_id, rocket_name, rocket_type }
    } = data.launch

  return (
    <>
        <h1>Launch</h1>
        {/* Display Mission Name */}
        <h2 className="display-4 my-3">
            <span className="text-dark">Mission:</span>
            &nbsp; { mission_name }
        </h2>
    </>
  )
}

export default Launch