// Import express framework
const express = require('express');

// Import path
const path = require('path');

// MIDDLEWARES
// Import multer
const multer = require('multer');

const upload = require('./upload');

// Initialize express();
const app = express();

// Define the port number
const PORT = 5000;

// Set a static folder
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

// Routes
app.get('/', (request, response) => {
  response.render('index');
});

// Route to handle image upload
app.post('/upload', (request, response) => {
  upload(request, response, (err) => {
    if (err) {
      console.log(err);
      response.render('index', { msg: err });
    } else {
      response.render('index', { file: 'images/' + request.file.filename });
    }
  });
});

app.listen(PORT, function () {
  console.log(`Server is listening on port ${PORT}`);
});
