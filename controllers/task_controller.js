//TaskController

//require the model schema
const Task = require('../models/task');

//Methods for Task Routes
module.exports.createTask = function(req,res){
     Task.create({
         desc: req.body.desc,
         category: req.body.category,
         priority: req.body.priority,
         dueDate: req.body.dueDate
     },function(err, newTask){
         if(err){
             console.log('Error in creating a task');
             return;
         }
         return res.redirect('back');
     });
 }
 
 module.exports.deleteTask = function(req,res){
    
     var ids = req.params.ids.split(',');
     ids.every((currID) => Task.findByIdAndDelete(currID,function(err){
         if(err){
             console.log('Error in deleting task/s');
             return;
         }
         return res.end();
     }))
 }