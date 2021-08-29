const mongoose = require("mongoose");
url = "mongodb://localhost:27017/test";

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true},
(error) => {
    if(!error){
        console.log("Success");
    }
    else{
        console.log("Error connecting to database")
    }
});

const Post = require("./post.model.js");