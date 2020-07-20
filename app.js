// Import express framework
const express = require('express');

// Import path
const path = require('path');

// Initialize express();
const app = express();

// Define the port number
const PORT = 5000;

// Set a static folder
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './view'));

app.listen(PORT, function () {
  console.log(`Server is listening on port ${PORT}`);
});
