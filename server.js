import express from 'express';
const app = express();
const port = process.env.PORT || 3000;

import routes from './routes/index.js';

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is working!');
});

import Client from './models/db.js';

Client.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Database connection failed:', err);
  } else {
    console.log('Database connected. Current time:', res.rows[0]);
  }
});

// Mount your routes here
app.use('/', routes);


app.listen(port, () => {
  console.log(`Web service listening at http://localhost:${port}/`)
});
