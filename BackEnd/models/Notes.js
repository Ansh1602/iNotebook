const mongoose = require('mongoose'); //

const { Schema } = mongoose;

const NotesSchema = new Schema({
    title:{
        type: 'string',
        required: true,
    },
    description: {
        type: 'sting',
        required: true,
    },
    tag:{
        type: 'string',
        default: "General"
    },
    date:{
        type: 'date',
        default: Date.now
    }
});


module.exports = mongoose.model('notes', NotesSchema);