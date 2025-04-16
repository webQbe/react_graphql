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
  return (
    <div>
        <h1 className="display-4 my-3">Launches</h1>
    </div>
  )
}

export default Launches