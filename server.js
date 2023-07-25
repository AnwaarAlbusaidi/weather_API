// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Serve static files from the 'website' directory
app.use(express.static('website'));

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());



// Route for the root URL
app.get('/', (req, res) => {
  // Handle the request here, e.g., serve the index.html file
  res.sendFile(__dirname + '/website/index.html');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// server.js
const projectData = {}; // Initialize an empty object to store data

// GET route
app.get('/getData', (req, res) => {
  res.send(projectData);
});


// Assuming you are using Express to send the response
app.post('/addData', (req, res) => {
  const data = req.body;
  projectData.temperature = data.temperature;
  projectData.date = data.date;
  projectData.userResponse = data.userResponse;
  res.send(projectData);
});

