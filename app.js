const express = require("express");
const app = express();
const mongoose = require("mongoose");
const fetch = require('node-fetch');
const connection = require('./model');
const PostModel = mongoose.model("posts");

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (request,response) => {
    response.sendFile(__dirname + "/index.html");
    
});

app.get("/posts", async(request, response) =>{
    const api_url = 'https://jsonplaceholder.typicode.com/posts';
    const fetch_response = await fetch(api_url);
    const data = await fetch_response.json();
    response.json(data);
    
    PostModel.insertMany(data).then(function(){
        console.log("Data inserted")  // Success
    }).catch(function(error){
        console.log(error)      // Failure
    });
});


module.exports = app;