// Import the path module
const path = require('path');

// Join path segments to create a path string
const joinedPath = path.join('users', 'lianne', 'docs', 'file.txt');
console.log('Joined Path:', joinedPath); // Output: users/john/docs/file.txt

// Resolve an absolute path
const absolutePath = path.resolve('users', 'lianne', 'docs', 'file.txt');
console.log('Absolute Path:', absolutePath); // Output will be an absolute path depending on your current directory

// Get the directory name of a path
const dirName = path.dirname('/users/lianne/docs/file.txt');
console.log('Directory Name:', dirName); // Output: /users/john/docs

// Get the base name (file name with extension) of a path
const baseName = path.basename('/users/lianne/docs/file.txt');
console.log('Base Name:', baseName); // Output: file.txt

// Get the file extension of a path
const extName = path.extname('/users/lianne/docs/file.txt');
console.log('Extension Name:', extName); // Output: .txt

// Normalize a path to remove redundant segments
const normalizedPath = path.normalize('/users/lianne/../lianne/docs/./file.txt');
console.log('Normalized Path:', normalizedPath); // Output: /users/lianne/docs/file.txt