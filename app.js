const express = require('express');
const path = require('path');
const bp = require('body-parser');
const app = express(); 
const PORT = process.env.PORT || 4000;
const route = require('./routes/routes');

// using the router to the app
app.use(route);
app.use(bp.json());
app.use(bp.urlencoded({extended: false}));

route.get('/', (req,res) => {
  return res.send("Home page");
});


app.listen(PORT, function(){
  console.log('Server running on: '+ PORT);
});
