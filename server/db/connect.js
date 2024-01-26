const mongoose = require('mongoose');


const connect = ()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/taskmanager').then(()=>{
        console.log("Database Connected");
    }).catch((err)=>{
        console.log(err);
    })
}


module.exports = connect;