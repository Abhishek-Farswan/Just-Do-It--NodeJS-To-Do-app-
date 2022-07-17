//HomeController

//require the model schema
const Task = require('../models/task');

//Method for Home Route
module.exports.home = function(req,res){
   
    Task.find({}, function(err,tasks){
        if(err){
            console.log("Error in fetching tasks from db");
            return;
        }
        return res.render('home',{
            task_List:tasks
           });
    });
}