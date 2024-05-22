// Import the moment module
const moment = require('moment');

// Get the current date and time
const now = moment();

// Log the current date and time
console.log('Current Date and Time:', now.format('YYYY-MM-DD HH:mm:ss'));

// Add 7 days to the current date
const futureDate = now.add(7, 'days');
console.log('Date 7 Days from Now:', futureDate.format('YYYY-MM-DD HH:mm:ss'));

// Subtract 1 month from the current date
const pastDate = now.subtract(1, 'month');
console.log('Date 1 Month Ago:', pastDate.format('YYYY-MM-DD HH:mm:ss'));

// Format the date in a different way
const formattedDate = now.format('dddd, MMMM Do YYYY, h:mm:ss a');
console.log('Formatted Date:', formattedDate);

// Check if a date is before another date
const isBefore = moment('2023-12-25').isBefore('2024-01-01');
console.log('Is December 25, 2023 before January 1, 2024?', isBefore);

// Parse a date string
const parsedDate = moment('2024-05-21', 'YYYY-MM-DD');
console.log('Parsed Date:', parsedDate.format('MMMM Do, YYYY'));