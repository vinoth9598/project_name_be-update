

const Email = require('../models/email.js');

const deleteEmails=require('express').Router();

deleteEmails.delete('/delete',async(request,response)=>{

    try{

        await Email.deleteMany({_id: { $in: request.body }})
        return response.status(200).json('delete emails successfully..,')

    }catch(error){
        response.status(500).json(error.message);
    }

})


module.exports = deleteEmails;