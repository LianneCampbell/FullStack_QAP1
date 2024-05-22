// Import the fs module
const fs = require('fs');

// Write data to a new file asynchronously
fs.writeFile('example.txt', 'Hello, this is FileSystem!', (err) => {
  if (err) throw err;
  console.log('File has been written');

  // Read the file content asynchronously
  fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(`File content: ${data}`);

    // Append data to the file asynchronously
    fs.appendFile('example.txt', '\nAppended text.', (err) => {
      if (err) throw err;
      console.log('Data has been appended');

      // Delete the file asynchronously
      fs.unlink('example.txt', (err) => {
        if (err) throw err;
        console.log('File has been deleted');
      });
    });
  });
});