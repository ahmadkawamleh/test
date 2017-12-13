var fs=require('fs');
var http=require('http');
http.createServer(function(req , res){
 res.end('hi');
}).listen(8080);
console.log('hi');