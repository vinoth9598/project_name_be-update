

const dashboard=require('express').Router();

dashboard.get('/',(req,res)=>{
    `   
        GET - https://gmail-clone-8pm9.onrender.com/emails/inbox
        GET - https://gmail-clone-8pm9.onrender.com/emails/sent
        GET - https://gmail-clone-8pm9.onrender.com/emails/starred
        GET - https://gmail-clone-8pm9.onrender.com/emails/allmail
        GET - https://gmail-clone-8pm9.onrender.com/emails/draft
        GET - https://gmail-clone-8pm9.onrender.com/emails/bin
    `
});

module.exports=dashboard;