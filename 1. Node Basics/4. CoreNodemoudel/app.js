const http = require('http');
const port = 3000;

const server = http.createServer((req, res)=>{
  res.end("Hello world");
})

server.listen(port, () => console.log("Server is running on port " + port));



/*

above implementation can be written in sama as below
this code taken from w3schools.com .....................


var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080


*/
