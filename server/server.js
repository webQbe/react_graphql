/* Main Server Setup */
const express = require('express'); // web framework for Node.js
const { graphqlHTTP } = require('express-graphql'); // middleware
const cors = require('cors'); // import cors middleware
const schema = require('./schema'); // custom GraphQL schema

// Initialize Express app
const app = express();

// Add cors to Express app to enable all origins 
// (i.e., any domain/port can make requests)
app.use(cors());

// Set up route /graphql
app.use('/graphql', 
    graphqlHTTP({
        schema
    })
);

// Start server on port 5000 or any port defined in the environment.
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));