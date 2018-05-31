const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// handle requests here

// need to use React 
app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/', (req, res) => {
    res.send('SERVER RUNNING, THIS THE ROOT');
});

app.listen(3000, function () {
    console.log('listening on port 3000!');
});