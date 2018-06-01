require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');


const app = express();

// handle requests here

// need to use React 
app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/', (req, res) => {

});

app.listen(process.env.PORT, () => {
    console.log('listening on port 3000!');
});