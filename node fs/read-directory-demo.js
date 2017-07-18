var fs = require('fs');

// var myDir = process.env.HOME + '/Downloads/';
// fs.readdir(myDir, function(err,data){
//     console.log(data);
//     console.log('There are '+data.length+' items in the directory:'+myDir);
// });

myDir = process.env.HOME + '/Desktop/';
fs.readdir(myDir, function(err,data){
    console.log(data);
    console.log('There are '+data.length+' items in the directory:'+myDir);
    CountFiletypes(data)
});


function CountFiletypes(data) {
    data.forEach(function(element) {
        getFileType(element)
    }, this);
}

function getFileType(element) {
    var startIndex = element.indexOf('.')
    var endIndex = element.length
    console.log(element.slice(startIndex,endIndex))
}