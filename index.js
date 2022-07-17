//Getting express 
const express = require('express');

//acquire the connection ( to check if it is successfull )
const db = require('./config/mongoose');
//acquire the model
const Task = require('./models/task');

//Firing up express
const app = express();
const port = 8000;

//use express router
app.use('/',require('./routes/index'));
app.use('/',require('./routes/tasks'));

//set up the view engine
app.set('view engine','ejs');
app.use(express.urlencoded({ extended: true }))

//setting up views folder
app.set('views','./views');
app.use(express.static('assets'));

//Listening to port
app.listen(port,function(err){
   if(err){
       console.log(`Error in running the server : ${err}`);
   } 
   console.log(`Server is running on port : ${port}`);
});