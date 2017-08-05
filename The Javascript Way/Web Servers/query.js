require('es6-promise').polyfill();
require('isomorphic-fetch');

fetch(
  "https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/languages.txt"
)
  .then(response => response.text()) // Access and return response's text content
  .then(text => {
    console.log(text)// Display file content in the console
  });