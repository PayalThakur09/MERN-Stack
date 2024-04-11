const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    countryname : {
                   type : String,
                   required : true
                },
    capitalname : {
                   type : String,
                   required : true
                }
});

const users = new mongoose.model("users",userSchema);

module.exports = users;