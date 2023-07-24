// Core modules that is why can be imported anywhere when needed
const http = require("http");

// http.createServer(function(req,res){
//     res.write("Hello this is server created from http module");
//     res.end("End");
// }).listen(8080);

// 3rd party module [npm installed]
const express = require("express");

// Initializing express  
const app = express();

app.listen(8080);
// Following block of code will be run when landing on http://localhost:8080/
app.get("", (req, res) => {
    res.send("Server is running with express js");
});
// Following block of code will be run when landing on http://localhost:8080/greet
app.get("/greet", (req, res) => {
    res.send("Hello");
});
// Following block of code will be run when landing on http://localhost:8080/bye
app.get("/bye", (req, res) => {
    res.send("Bye!!! Catch you later");
});



