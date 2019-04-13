const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let taskSchema = new Schema ({
    title: {type: String, required: true},
    status: {type: String, required: true}
});

let Task = mongoose.model('Task', taskSchema);

module.exports = Task;