const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files from /public
app.use(express.static(path.join(__dirname, 'public')));

// Simple health check endpoint for debugging / monitoring
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Ajay portfolio is live', time: new Date() });
});

app.listen(PORT, () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});

