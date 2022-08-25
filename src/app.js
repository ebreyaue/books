const express = require('express');
const path = require('path');
const logger = require('morgan');

const app = express();
//settings
app.set('port',5000);
app.set('views',path.resolve(__dirname,'views'));
app.set('view engine','ejs');

//middleware
app.use(logger('dev'));
app.use(express.urlencoded({extended:false}))

//routes
app.use(require('./routes/index'));


//static
app.use(express.static(path.join(__dirname,'public')));

//404 handller
app.use((req,res,next)=>{
    res.render('404');
});




module.exports=app;
