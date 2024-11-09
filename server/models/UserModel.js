const mongoose = require ("mongoose")
const bcrypt = require("bcrypt")

const userScheme = new mongoose.Schema({
    email: {
        type :String,
        required : [true, "your email address"],
        unique : true
    },
    username :{
        type: String,
        requried :[true,"your username"],
    },
    password:{
        type : String,
        requried : [true, "yoiur password"]
    },
    createdAt :{
        type:Date,
        default: new Date(),
    },
});

userScheme.pre("save", async function() {
    this.password = await bcrypt.hash(this.password, 12);

});

module.exports = mongoose.model("User", userScheme)