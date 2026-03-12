// console.log("Hello terminal i am using npm");

// alert("Hello, class node")

const express = require("express");
//exprees is a framework for node js
//require is a function that is used to import modules in node js
const app = express();
//app is an instance of express
const port = 2000;

const sudents = [
    {
        name: "John Doe",
        age: 20,
        grade: "A"
    },
    {
        name: "Jane Smith",
        age: 22,
        grade: "B"
    },

    {
        name: "Bob Johnson",
        age: 19,
        grade: "C"
    },
    {
        name: "Alice Brown",
        age: 21,
        grade: "A"
    },
    {
        name: "Tom Wilson",
        age: 23,
        grade: "B"
    },
    {
        name: "Sara Lee",
        age: 18,
        grade: "C"
    },,
    {
        name: "Mike Davis",
        age: 20,
        grade: "A"
    },
    {
        name: "Emily Taylor",
        age: 22,
        grade: "B"
    },
    {
        name: "David Clark",
        age: 19,
        grade: "C"
    },  

]
app.listen(port, () => {
    console.log("Server is running on port 2000");
    console.log("server is running at http://localhost:2000");
    console.log("server is running at http://127.0.0.1:2000");
});
//app.listen is a method that is used to start a server and listen for incoming requests on a specified port
//2000 is the port number that the server will listen on
//the second argument is a callback function that will be executed when the server starts successfully

//request methods
//get, post, put, delete, patch, options, head

//Get: used to retrieve data from the server
    //it is the most common method used to request data from a server 
    //Example: when you visit a website, your browser sends a GET request to the server to retrieve the webpage and its resources (like images, CSS files, etc.)
    //syntax: app.get("/route", (req, res) => {
    //     //code to handle the request and send a response
    // });

    app.get("/", (req, res) => {
        res.send("Hello, welcome to my server!");
    });

    app.get("/students", (req, res) => {
        res.send(sudents);
    })
//Post: used to send data to the server
    //it is commonly used when submitting forms or sending data to the server for processing

    //sending along payload in the body of the request, which can include form data, JSON data, or files
    //Example: when you fill out a form on a website and click the submit button, your browser sends a POST request to the server with the form data for processing (like saving it to a database or sending an email)

    

    //syntax: app.post("/route", (req, res) => {
    //     //code to handle the request and send a response
    // });
//Put: used to update data on the server