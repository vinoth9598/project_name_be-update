

const Email=require('../models/email.js');

const toggleStarredEmails=require('express').Router();

toggleStarredEmails.post('/', async(request,response) =>{

    try{
        await Email.updateOne({ _id: request.body.id},{$set:{ starred: request.body.value }});

        return response.status(200).json('email is starred mark');

    }catch(error){
        response.status(500).json(error.message);
    }

})

module.exports = toggleStarredEmails;