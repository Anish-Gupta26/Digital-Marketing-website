const mongoose = require('mongoose');

//Mongo DB atlas path-
const DB = 'mongodb+srv://anish:Anishgupta@26@cluster0.7igx3.mongodb.net/entries?retryWrites=true&w=majority'
//creating db
mongoose.connect(DB,{ useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true
}).then(()=>{
    console.log("DB connected")
}).catch((err)=>{
    console.log(err);
})