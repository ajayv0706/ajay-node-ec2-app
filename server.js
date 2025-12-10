const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve everything inside /public as static files
app.use(express.static(path.join(__dirname, 'public')));

// Fallback to index.html for any route (single-page app)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Ajay portfolio running on http://0.0.0.0:${PORT}`);
});

