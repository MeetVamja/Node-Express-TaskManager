const mongoose = require('mongoose');
const Taskschema = new mongoose.Schema({
    name : {
        type : String,
        required:[true ,'must provide name'],
        trim : true,
        maxlength:[20,'name can not be more than 20 char']
    }
    , 
    completed:{
        type:Boolean,
        defualt: false
    }
})

module.exports = mongoose.model('Task',Taskschema);