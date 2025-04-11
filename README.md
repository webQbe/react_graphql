# React with GraphQL and Apollo Client
- Building an app to fetch data with GraphQL
- Creating a frontend with React with Apollo, a client to interface with a GraphQL server
- The app will interface with SpaceX API which gives us data such as launches, rockets, etc.
- It lists all SpaceX missions, succeeded ones displayed in green and failed ones in green
- Styling with Bootstrap and Bootswatch custom theme
- Using React Router to navigate to Launch Details page

## GraphQL
- GraphQL is a way to query your data.
- You can use GraphQL with an existing REST APIs
- With GraphQL you can ask for specific thing *(e.g.: title of a blog post)*
- No need to request whole data to parse and then extract the title 
- GraphQL makes apps faster as the app controls the data it is getting from the server
- GraphQL queries look elegant, just like JavaScript objects
- GraphQL is not specific for JavaScript or React


## Getting Started

### Create Backend

1. Create `server/` directory
    1. Open it in VSCode terminal: `cd server`
    2. Create `server/package.json` file: `yarn init -y`

2. Install back-end dependencies: `yarn i graphql express-graphql express axios cors helmet`
3. Install `nodemon` for development: `yarn i -D nodemon`
4. Create `server/server.js`
5. Add following script to root `package.json`:
    ```
      "scripts": {
            "start": "node server.js",
            "server": "nodemon server.js"
        }
    ```
6. Start the server: `node server.js`

## Test GraphQL queries

### Request Certain Data Fields
1. Install VSCode **Thunder Client** extension:
2. Create a **POST** request to `http://localhost:5000/graphql`
3. Select **Body** > **GraphQL** tab
4. Request certain fields with GraphQL Query:
        
```
{
    launches {
                flight_number,
                mission_name,
                rocket{
                        rocket_id,
                        rocket_name,
                        rocket_type 
                     }
            }
}
```
5. Click **Send** and see the response   


### Request Certain Data Type
1. Request single launch (not a list) by flight_number:
```
{ 
    launch (flight_number: 2) {
        mission_name,
        launch_year,
        launch_success,
        rocket {
                rocket_name
        }
    }
}
```

2. Click **Send** and see the response  