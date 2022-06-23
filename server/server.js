const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const activeController = require('./controllers/activeController');
const userController = require('./controllers/userController');
const cookiesController = require('./controllers/cookiesController');

//line
if(NODE_ENV='production'){
  console.log('here is the file: ', path.join(__dirname, '../build'));
  app.use('/build', express.static(path.join(__dirname, '../build')));
}

//this is the root request
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../index.html'));
});

//this is the signup page request
app.get('/signup', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/secondarypages/signup.html'));
});

//this is the login page request
app.get('/login', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/secondarypages/login.html'));
});

//signup should create a user, store the info with a hashed password,
// and start a session cookie
app.post('/signup',
  userController.newUser,
  cookiesController.setSessionCookie,
  activeController.activateSession,
  //if the middleware brought you here, there's no turning back
  (req, res) => {
    res.redirect(302, res.locals.redirectPath);
  }
)



//authentication for user
//check if the redirect property exists on the object, in which case, just redirect to the link in there
app.get('/secret', activeController.cookieCheck,
  (req, res) => {
    if(res.locals.redirect){
      res.redirect(302, res.locals.redirect);
    } else {
      res.sendFile(path.resolve(__dirname, '../client/secret.html'));
    }
  }
);

app.listen(3000, () => {
    console.log("Server listening on port:3000");
});