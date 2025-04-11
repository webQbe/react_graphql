/* Main Server Setup */
const express = require('express'); // web framework for Node.js
const { graphqlHTTP } = require('express-graphql'); // middleware
const schema = require('./schema'); // custom GraphQL schema

// Initialize Express app
const app = express();

// Set up route /graphql
app.use('/graphql', 
    graphqlHTTP({
        schema
    })
);

// Start server on port 5000 or any port defined in the environment.
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));