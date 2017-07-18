const http = require('http')


var numTimes = 100

for (var i = 0;i < numTimes; i++) {
    var data = http.get('www.reddit.com/pics.json')
}