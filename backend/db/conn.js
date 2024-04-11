const mongoose = require("mongoose");

const DB = "mongodb+srv://payalmsd:Payal092302@cluster0.qxeuvgb.mongodb.net/mernstack?retryWrites=true&w=majority"

mongoose.connect(DB,{
}).then(()=> console.log("connection start")).catch((error)=> console.log(error.message));