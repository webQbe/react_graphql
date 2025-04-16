import React from 'react';
import { gql,  // to parse GraphQL query string
         useQuery 
        } from '@apollo/client';



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
    // When data is ready, log the data object                   
    console.log(data)    

    const test = 'test'; // a regular string   

  return (
    <div>
        <h1 className="display-4 my-3">Launches</h1>
        
        <h1>{ test }</h1> 
        {/* Everything up to this point is working (good for debugging). */}
    </div>
  )
}

export default Launches