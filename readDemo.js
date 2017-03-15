var fs = require('fs');
var data = require('./data1.json');

console.log(data.name);

fs.readFile('./data1.json','utf-8',function(err,data) {
  data = JSON.parse(data);
  console.log('Name:'+data.name);
  console.log('Age:'+data.age);
});
