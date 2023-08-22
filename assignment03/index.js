

const fs = require("fs");

const data = " Node.js is a server-side runtime environment that enables executing JavaScript on servers. Its non-blocking, event-driven architecture supports efficient handling of many connections. By using a single language across front-end and back-end, Node.js facilitates scalable, real-time applications with an extensive package ecosystem for rapid development. "

fs.writeFileSync("nodeJs_architecture.txt",data);

const readData = fs.readFileSync("nodeJs_architecture.txt");
console.log(readData.toString());

// for deleting the created file uncomment the following code

// fs.unlink("./nodeJs_architecture.txt",()=>{
//     console.log("File deleted successfully");
// });