const express = require('express');
const app = express();
const port = 4040;

// Define a simple GET endpoint
app.get('/', (req, res) => {
  res.send('First app with github actions. Some changes');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});