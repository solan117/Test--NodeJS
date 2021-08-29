const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    userId:Number,
    id: Number,
    title:String,
    body: String
}, {strict: false});

module.exports = mongoose.model("posts", PostSchema);