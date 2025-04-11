/* Define GraphQL schema */

const axios = require('axios'); // to make HTTP requests

/* Core GraphQL types used to define the schema */
const {
        GraphQLObjectType,
        GraphQLInt,
        GraphQLString,
        GraphQLBoolean,
        GraphQLList,
        GraphQLSchema
    } = require('graphql');

// Launch Type - describes a SpaceX launch
const LaunchType = new GraphQLObjectType({
    name: 'Launch',
    fields: () => ({
      flight_number: { type: GraphQLInt },    
      mission_name: { type: GraphQLString },    
      launch_year: { type: GraphQLString },    
      launch_date_local: { type: GraphQLString },    
      launch_success: { type: GraphQLBoolean },    
      rocket: { type: RocketType } // Defined below
    })
});

// Rocket Type - represents the rocket used in a launch
const RocketType = new GraphQLObjectType({
    name: 'Rocket',
    fields: () => ({
      rocket_id: { type: GraphQLString },    
      rocket_name: { type: GraphQLString },    
      rocket_type: { type: GraphQLString }    
    })
});

// Root Query - entry point for any query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        launches: { //  return a list of all SpaceX launches
            type: new GraphQLList(LaunchType),
            resolve(parent, args) { 
                // Make the actual API call using axios & return the data
                return axios.get('https://api.spacexdata.com/v3/launches')
                    .then(res => res.data);
            }
        },
        launch: { // name of the GraphQL query
            type: LaunchType, // type of data returned – one Launch, not a list
            args: { // Arguments the query takes
                flight_number: { type: GraphQLInt } // flight_number of type Int
            },
            resolve(parent, args) { // Runs when someone queries 'launch'
                // Get data from the API
                return axios      
                    .get(`https://api.spacexdata.com/v3/launches/${args.flight_number}`)
                    .then(res => res.data);
            }
        }
    }
});

// Exports the full schema, 
module.exports = new GraphQLSchema({
    query: RootQuery
});
// Includes only a query: GET (fetch data)
// No mutations: like POST, PUT, DELETE (to change data)