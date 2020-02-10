const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bp = require('body-parser');
const app = express(); 
const PORT = process.env.PORT || 4000;
const route = require('./routes/routes');
// MODELS
require("./models/user.model");

// Mongoose config
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/mern-stack`);

// using the router to the app
app.use(route);
app.use(bp.json());
app.use(bp.urlencoded({extended: false}));

require('./routes/user.routes')(app);

if(process.env.NODE_ENV === "production") {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  });
}

route.get('/', (req,res) => {
  return res.send("Home page");
});

app.listen(PORT, function(err){
  if(err) return console.error(err);
  return console.log(`server running on port ${PORT}`);
});
