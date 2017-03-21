var fs = require('fs');

var myDir = process.env.HOME + '/Downloads/';
fs.readdir(myDir, function(err,data){
    console.log(data);
    console.log('There are '+data.length+' items in the directory:'+myDir);
});
