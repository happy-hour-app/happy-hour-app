require('dotenv').config();
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const db = require('../mongo/mongo');


const app = express();

// handle requests here

// need to use React 
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../react-client/dist')));

app.get('/', (req, res) => {
  // res.end();
});

app.post('/login', (req, res) => {
  console.log(req.body);
  res.status(200).send(`200: Recieved request to login with user Email: ${req.body.userEmail} password:  ${req.body.password}`);
});

app.post('/user', (req, res) => {
  console.log(req.body);
  res.status(200).send(`200: Recieved request to create user with user Email: ${req.body.userEmail} password:  ${req.body.password}`);
});

app.listen(process.env.PORT, () => {
  console.log('listening on port 3000!');
});
