const mongoose = require("mongoose");
url = "mongodb+srv://karan:Karan9896@cluster0.o6gdt.mongodb.net/test";
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