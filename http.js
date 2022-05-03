const http = require('http')

port = 3000;

server = http.createServer((req,res)=>{
    res.writeHead(200,("context-type:text/plain"));
    res.end('Hello World')
})

server.listen(port,()=>{
    console.log(`server is running on ${port}`);
})