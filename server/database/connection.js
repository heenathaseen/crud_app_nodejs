const mongoose=require('mongoose');
const { connect } = require('../routes/router');

const connectDB=async()=>{
    try{
       //mongodb connection string
        const con=await mongoose.connect(process.env.MONGO_URI,{
            //control unwanted warnings in the console
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAndModify:false,
            useCreateIndex:true
        })
        console.log(`MongoDb connected:${con.connection.host}`)

    }catch(err){
        console.log(err);
        process.exit(1);
    }
}
module.exports=connectDB;