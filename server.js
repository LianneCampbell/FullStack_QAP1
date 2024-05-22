// Import the http module
const http = require('http');
// Import the fs module
const fs = require('fs');
// Import the path module
const path = require('path');

global.DEBUG = true;

function fetchFile(fileName, response) {
    fs.readFile(fileName, (error, content) => {
      if(error) {
        response.writeHead(500, { 'Content-Type': 'text/plain' });
        response.end('500 Internal Server Error');
      } else {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(content, 'utf-8');
      }
    });
  };
  
  const server = http.createServer((request, response) => {
    if(DEBUG) console.log('Request Url:', request.url);
    let path = './views/';
    switch(request.url) {
      case '/':
        path += 'index.html';
        if(DEBUG) console.log(path);
        fetchFile(path, response);
        break;
      case '/about':
        path += 'about.html';
        if(DEBUG) console.log(path);
        fetchFile(path, response);
        break;
      case '/filesystem':
        path += 'filesystem.html';
        if(DEBUG) console.log(path);
        fetchFile(path, response);
        break;
      case '/path':
        path += 'path.html';
        if(DEBUG) console.log(path);
        fetchFile(path, response);
        break;
      case '/http':
        path += 'http.html';
        if(DEBUG) console.log(path);
        fetchFile(path, response);
        break;
      default:
        if(DEBUG) console.log('404 Not Found');
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.end('404 Not Found');
        break;
    }
  });
  
  server.listen(3000, () => {
    console.log('Server is running...');
  });