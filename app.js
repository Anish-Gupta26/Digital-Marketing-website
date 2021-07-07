const express = require('express');
const app = express();
const path = require('path')
const hbs = require('hbs');
const user = require('./models/userdata')
require("./db/conn.js")
const port = process.env.PORT || 80

//setting the path
const staticpath = path.join(__dirname,"/public")
const templatepath = path.join(__dirname,"/templates/views")
const partialpath = path.join(__dirname,"/templates/partials")

app.use(express.urlencoded({extended:false}))
app.use(express.static(staticpath))
app.set('view engine','hbs');
app.set('views',templatepath);
hbs.registerPartials(partialpath);

//routing
app.get('/',(req,res)=>{
    res.render('index')
});
app.post('/contact',async(req,res)=>{
    try {
        const userdata = new user(req.body);
        await userdata.save();
        res.status(201).render("index")
    } catch (error) {
        res.send(error)
    }
})

//server
app.listen(port,()=>{
    console.log(`Server is running at ${port}`)
})