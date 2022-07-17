//require the library
const mongoose = require('mongoose');

//Defining schema
const taskSchema = new mongoose.Schema({
    desc: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true
    },
    dueDate: {
        type: String,
        required: true
    }
});

//Compiled the schema into model, model signifies collection
const Task = mongoose.model('Task',taskSchema);

//Exporting the model
module.exports = Task;