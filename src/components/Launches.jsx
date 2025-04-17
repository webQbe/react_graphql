import React from 'react';
import { gql,  // to parse GraphQL query string
         useQuery 
        } from '@apollo/client';
import LaunchItem from './LaunchItem'; // To handle rendering each individual launch
import MissionKey from './MissionKey'; // Small legend showing color meanings


// Request a list of launches with selected fields from the backend
const LAUNCHES_QUERY = gql`
    query LaunchesQuery {
        launches {
            flight_number
            mission_name
            launch_date_local
            launch_success
        }
    }
`;

const Launches = () => {

    // Run GraphQL query
    const { 
            loading, // 'true' while the request is in flight
            error,   // An 'Error' object if the query fails
            data     // The actual query result (your launches data)
        } = useQuery(LAUNCHES_QUERY);

    // While waiting for data, show a loading message.
    if (loading) return <h4>Loading...</h4>; 
    // If the query fails, log the error to the console
    if (error) console.log(error); 

  return (
    <>
        <h1 className="display-4 my-3">Launches</h1>

        <MissionKey /> {/* Add legend right above the list of launches */}

        <>
            {   // Loop through data.launches (comes from the GraphQL query)
                data.launches.map(launch => (

                    /* Render a <LaunchItem /> for each launch */
                    <LaunchItem 
                        // Use flight_number as a key for React to optimize rendering
                        key={launch.flight_number}
                        launch={launch} // Pass each launch as a prop 
                    />
                    
                ))
            }
        </>
    </>
  )
}

export default Launches