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

2. Install back-end dependencies: `yarn i graphql express-graphql express axios cors concurrently`
3. Install `nodemon` for development: `yarn i -D nodemon`
4. Create `server/server.js`
5. Add following script to `server/package.json`:
    ```
       "scripts": {
            "start": "node server.js",
            "server": "nodemon server.js"
        }
    ```
6. Start the server: `node server.js`


### Test GraphQL queries

#### Request Certain Data Fields
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


#### Request Certain Data Type
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


### Create Frontend

1. Download and Install **Node.js** on project root directory
2. Open project folder in VSCode Integrated Terminal
3. Install Vite on terminal:
    - Run `npm create vite@latest .`
    - Select `React` & Enter
    - Select `JavaScript` & Enter

4. Update `vite.config.js` file:
    - Add `server: { port: 3000, }` in `defineConfig()`

5. Install dependencies:
    1. Open terminal and run `npm install`
    2. Install Concurrently: 
        ```
        npm install concurrently --save-dev
        ```
    3. Install other packages:
        ```
        yarn add @apollo/client graphql classnames moment dayjs   
        ```
6. Add following script to root `package.json`:
    ```
    "scripts": {
            "client": "vite",                      
            "server": "nodemon server/server.js",
            "dev": "concurrently \"npm:server\" \"npm:client\""
    }
    ```

7. Delete: `public/vite.svg`, `src/assets`, `src/index.css`
    1. Remove `import './index.css'` from `src/main.jsx`
    2. Modify and Remove from `src/App.jsx`:
        ```
        import reactLogo from './assets/react.svg'
        import viteLogo from '/vite.svg'
        ```
    3. Clear contents in `src/App.css`

8. Start frontend and backend servers: `npm run dev`