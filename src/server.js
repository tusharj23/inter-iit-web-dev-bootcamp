// server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 5001; // Use a different port number


const cors = require('cors');


app.use(cors()); // Enable CORS for all origins

// Your other middleware and routes go here


app.use(express.json());

// Define your routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/stocks', async (req, res) => {
  try {
    // Fetch and send stock data
    res.json({ message: 'Stock data endpoint' });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching stock data' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
