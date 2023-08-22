

const http = require ("http");

const server = http.createServer((req,res) => {
    if(req.url === "/"){
        res.write("<h1> I am aquring skills of full stack web developement from pw skills!!! </h1>");
    }
    res.end();
})
const port = 6300
  server.listen(port);
console.log(`The http server is running on the port ${port}`); 