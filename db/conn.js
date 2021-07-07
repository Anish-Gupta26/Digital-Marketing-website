const mongoose = require('mongoose');

//creating db
mongoose.connect("mongodb://localhost:27017/entries",{ useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true
}).then(()=>{
    console.log("DB connected")
}).catch((err)=>{
    console.log(err);
})