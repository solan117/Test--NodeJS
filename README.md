# API to GET data

## Version: 1.0.0
JSONPlaceHolder RESTful Web API to perform operations

# Instructions on how to run the app locally
Clone project from GitHub or download zip file and unzip

Run npm install

Run npm start to start the project

Go on http://localhost:3000/

# To test project
Run npm install

Run npm test

# Overview of the project

In this project I have used JSONPlaceHolder API to get data and save it to database
This project is built using Node.js, Express.js for backend development and HTML to create a simple web page to consume API
Used jest framework and supertest library to write unit test cases

### API Documentation

### /posts

#### GET

##### Summary

Retrieve a list of all posts

##### Description

List of all posts include userId, id, title, body. Also, stores all data in database.

##### Responses

| Code | Description      |
| ---- | ---------------- |
| 200  | A list of posts. |