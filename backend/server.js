const express = require('express');
const {marked} = require('marked');
const cors = require('cors'); // Add this line

const app = express();

app.use(cors()); // Enable CORS for all routes

app.use(express.json());

app.post('/api/convert', (req, res) => {
  const { markdown } = req.body;
  const html = marked(markdown);
  res.send({ html });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
