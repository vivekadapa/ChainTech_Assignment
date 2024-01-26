const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    taskStatus:{
        type:Boolean,
        default:false
    },
    completeBy:{
        type:Date,
        required:true
    }
})


TaskSchema.virtual('crossedDeadline').get(()=>{
    const currentDate = Date.now();
    if(!this.taskStatus && this.completeBy < currentDate){
        return false;
    }
    else{
        return true;
    }
})

const Task = mongoose.model('Task',TaskSchema);

module.exports = Task