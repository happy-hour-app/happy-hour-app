const mongoose = require('mongoose');
mongoose.connect('mongodb://jelani:jelani504@ds245250.mlab.com:45250/happy-hour-app');

const db = mongoose.connection;

db.on('error', () => {
  console.log('mongoose connection error');
});

db.once('open', () => {
  console.log('mongoose connected successfully');
});

exports = db;
// make Schemas and export functions for accessing database