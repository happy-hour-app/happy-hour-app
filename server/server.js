require('dotenv').config();
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const db = require('../mongo/mongo');


const app = express();

// handle requests here

// need to use React 
app.use(express.static(path.join(__dirname, '/../react-client/dist')));

app.get('/', (req, res) => {
  // res.end();
});

app.listen(process.env.PORT, () => {
  console.log('listening on port 3000!');
});
