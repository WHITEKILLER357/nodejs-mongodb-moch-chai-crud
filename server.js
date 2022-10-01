const express = require("express");
const mongose = require("mongoose");
const env = require('dotenv');
const userRoute = require('./routes/userRoute');
const { propfind } = require("./routes/userRoute");

env.config();

const app = express();

mongose.connect(
    process.env.mongodb_uri || "mongodb://localhost:27017/test",
    {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    },
    (err)=>{
        if(err){
            console.log(err);
        }else{
            console.log("connected to mongoDB");
        }
    }
);


app.use(express.json());
app.use("/api/users",userRoute);

app.listen(8090,()=>{
    console.log("The server is runing on post: 8090");
});



module.exports = app;
