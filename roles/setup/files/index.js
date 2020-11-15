var http = require("http");
var server = http.createServer(function (req, res) {
res.writeHead(200);
res.end("Hello world!");
});
server.listen(3000, ()=>{
   console.log("server started at port "+3000);
});
