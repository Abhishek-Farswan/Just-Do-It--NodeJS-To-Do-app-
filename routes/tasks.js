//Routes for Tasks

//Necessary Initializations
const express = require('express');
const bodyParser = require('body-parser');
const taskRouter = express.Router();
taskRouter.use(bodyParser.json()); 
taskRouter.use(bodyParser.urlencoded({ extended: true }));

//Loaded TaskController 
const taskController = require('../controllers/task_controller');


console.log('Router for tasks is loaded');

//Directing to TaskController methods
taskRouter.post('/create-task',taskController.createTask);
taskRouter.get('/delete-task/:ids',taskController.deleteTask);

module.exports = taskRouter;