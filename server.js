// Import the Express library (used to create the web server)
import express from 'express';
import bodyParser from 'body-parser';
const app = express();

// Set the port to 3000, or use the value from the environment
const port = process.env.PORT || 3006;

// Import the route definitions (e.g. /auth routes)
import routes from './routes/index.js';

// Allow the app to accept and parse JSON in request bodies
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// Simple test route for the root path

app.get('/', (req, res) => {
  res.send('Server is working!');
});

// Import the database client
import Client from './models/client_db.js';

// Immediately test the database connection by running a simple query
Client.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Database connection failed:', err);
  } else {
    console.log('Database connected. Current time:', res.rows[0]);
  }
});

// Attach the route handlers from routes/index.js
app.use('/', routes);

// Start the server and log where it’s running
app.listen(port, () => {
  console.log(`Web service listening at http://localhost:${port}/`)
});