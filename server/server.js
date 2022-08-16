const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const activeController = require('./controllers/activeController');
const userController = require('./controllers/userController');
const cookiesController = require('./controllers/cookiesController');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost/auth';
mongoose.connect(mongoURI)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());


//line
// if(NODE_ENV='production'){
//   console.log('here is the file: ', path.join(__dirname, '../build'));
//   app.use('/build', express.static(path.join(__dirname, '/build')));
// }
// app.use(express.static(path.join(__dirname, 'App', '/build')));
app.use(express.static(path.join(__dirname, '../build')));

// //this is the root request
// app.get('/', (req, res) => {
//    return res.sendFile(path.resolve(__dirname, '../index.html'));
// });

app.listen(3000, () => {
    console.log("Server listening on port:3000");
});