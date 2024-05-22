// Import the validator module
const validator = require('validator');

// Validate an email address
const email = 'test@example.com';
console.log(`Is "${email}" a valid email address? ${validator.isEmail(email)}`);

// Validate a URL
const url = 'https://example.com';
console.log(`Is "${url}" a valid URL? ${validator.isURL(url)}`);

// Validate a credit card number
const creditCardNumber = '4111111111111111';
console.log(`Is "${creditCardNumber}" a valid credit card number? ${validator.isCreditCard(creditCardNumber)}`);