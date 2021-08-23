const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    text: {type: String, required: true},
    done: {type:Boolean, required: true},
    //_id: {type: mongoose.Types.ObjectId} (dont know when this is required)
})

module.exports = mongoose.model('Todo', todoSchema);