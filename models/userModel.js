// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const userSchema = new Schema({
//     name: String,
//     phone: String,
//     email:String,
//     Image:String,
//     createAt:{
//         type:Date,
//         default:Date.now,
//     },
// });

// module.exports = mongoose.Schema("user",userSchema);

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    phone:String,
    email:String,
    image:String,
    createAt:{
        type:Date,
        default:Date.now,
    },
});

module.exports = mongoose.model("User",userSchema);