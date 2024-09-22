
const { mongoose } =require('mongoose');
require('dotenv').config();

const connection=()=>{
    const DB_URI=`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.k7wizfp.mongodb.net/email`;
    try{
        mongoose.connect(DB_URI);
        mongoose.set('strictQuery',false);
        console.log('Database connected successfully..,');

    }catch(error){
        console.log('Error while connecting with the database',error.message)
    }
}


module.exports=connection;