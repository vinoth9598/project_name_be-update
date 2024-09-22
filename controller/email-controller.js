
const Email = require('../models/email.js');

const saveSentEmails=require('express').Router();

saveSentEmails.post('',async(request,response)=>{

    try{

        const email= await new Email(request.body);
        email.save();

        response.status(200).json('email saved successfully..,');

    }catch(error){
        response.status(500).json(error.message);
    }
});



module.exports =  saveSentEmails;



