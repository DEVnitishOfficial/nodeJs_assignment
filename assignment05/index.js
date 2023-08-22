

const fs = require("fs");
fs.unlink("./nodeJs_architecture.txt",()=>{
    console.log("File deleted successfully");
});