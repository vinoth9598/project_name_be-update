const express = require('express');
const connection =require('./database/db');
const cors=require('cors');

const saveSentEmails = require('./controller/email-controller.js')
const getEmails = require('./controller/getEmails.js');
const moveEmailsToBin=require( "./controller/moveBin.js");
const toggleStarredEmails=require('./controller/starredEmails.js');
const deleteEmails = require('./controller/deleteEmails.js');
const dashboard = require('./controller/dashboard.js');
const userRouter = require('./controller/register.js');

const app=express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/users',userRouter);
app.use('/',dashboard);
app.use('/',saveSentEmails);
app.use('/',getEmails);
app.use('/save-draft',saveSentEmails);
app.use('/',moveEmailsToBin);
app.use('/starred',toggleStarredEmails);
app.use('/',deleteEmails);

const PORT = 3001;

connection();

app.listen(PORT,()=>{
    console.log(`server starting on PORT ${PORT}`)
});

