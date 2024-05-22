// Import the http module
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Log the request URL
  console.log(`Request URL: ${req.url}`);

  // Set the response header with HTTP status and Content-Type
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send the response body
  res.end('Hello, Peter!\n');
});

// Make the server listen on port 5000
server.listen(5000, () => {
  console.log('Server is listening on port 5000')
  console.log('Try localhost:5000');
});