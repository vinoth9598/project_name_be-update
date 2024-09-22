
const Email=require('../models/email.js');

const moveEmailsToBin=require('express').Router();


moveEmailsToBin.post('/bin' , async (req,res)=>{
    try{

        await Email.updateMany({_id: {$in: req.body }},{ $set: {bin:true ,starred:false, type:''}});
        
        return res.status(200).json('emails deleted successfully..,');

    }catch(error){
        res.status(500).json(error.message);
    }
})


module.exports = moveEmailsToBin;