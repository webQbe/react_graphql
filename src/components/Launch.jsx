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
    <div>
        {/* Display Mission Name */}
        <h1 className="display-4 my-3">
            <span className="text-dark">Mission:</span>
            &nbsp; { mission_name }
        </h1>

        <h4 className="mb-3">Launch Details</h4>

        {/* Bootstrap styled list */}
        <ul className="list-group"> 
            <li className="list-group-item">
                Flight Number: { flight_number }
            </li>
            <li className="list-group-item">
                Launch Year: { launch_year }
            </li>
            <li className="list-group-item">
                {/* Conditional rendering */}
                Launch Successful:&nbsp;  
                    <span 
                        className={classNames({
                            'text-success': launch_success,
                            'text-danger': !launch_success
                    })}>
                        { launch_success ? 'Yes' : 'No' }
                    </span>
            </li>
        </ul>
    </div>
  )
}

export default Launch