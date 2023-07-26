// Create web server application with Node.js
// Run with: node comments.js
// Access with: http://localhost:8080/comments

// Load HTTP module
const http = require("http");
const url = require("url");

const comments = [
  { name: "John", message: "Hello" },
  { name: "Jack", message: "Hi!" },
];

// Create HTTP server and listen on port 8080 for requests
http
  .createServer(function (req, res) {
    // Set the response HTTP header with HTTP status and Content type
    res.writeHead(200, { "Content-Type": "text/plain" });

    // Send the response body "Hello World"
    res.end("Hello World\n");
  })
  .listen(8080);

// Print URL for accessing server
console.log("Server running at http://
