const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bp = require('body-parser');
const app = express(); 
const PORT = process.env.PORT || 4000;
const route = require('./routes/routes');
const url = `mongodb://localhost:27017/mern-stack`;
// MODELS
require("./models/user.model");
 
// Mongoose config
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || url);

// using the router to the app
app.use(route);
app.use(bp.json());
app.use(bp.urlencoded({extended: false}));
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

require('./routes/user.routes')(app);

if(process.env.NODE_ENV === "production") {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  });
}

// default and basic routes
route.get('/', (req,res) => {
  return res.send("Home page");
});

app.listen(PORT, function(err){
  if(err) return console.error(err);
  console.log(`server running on port ${PORT}`);
});
