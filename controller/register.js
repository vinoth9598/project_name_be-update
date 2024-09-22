const User = require('../models/user');
const userRouter =require('express').Router();


userRouter.post('/', async (req,res)=>{

    const { email,name,password } = req.body;

    const passwordHash = await bcrypt.hash(password,10);

    const user = new User({
        email,
        name,
        passwordHash
    });

    const savedUser = await user.save();

    res.json(savedUser);
    
});

module.exports = userRouter;