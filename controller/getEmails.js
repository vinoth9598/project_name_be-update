
const Email=require('../models/email.js');

const getEmails=require('express').Router();

getEmails.get('/emails/:type', async(req,res)=>{
    try{
        let emails;
        
        if(req.params.type === 'bin'){
            emails = await Email.find({ bin: true })
        }else if (req.params.type === 'allmail'){
            emails = await Email.find({});
        }else if(req.params.type === 'starred'){
            emails = await Email.find({starred: true, bin:false})
        }
        else
        {
            emails = await Email.find({ type: req.params.type })
        }

        return res.status(200).json(emails);

    }catch(error){
        res.status(500).json(error.message);
    }

})

module.exports = getEmails;