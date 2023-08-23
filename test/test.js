

const EventEmitter = require("events");
const event = new EventEmitter();
event.on("sayMyName",()=> {
    console.log("my name is nitish");
})
event.on("sayMyName",()=> {
    console.log("my name is kumar");
})
event.on("sayMyName",()=> {
    console.log("my name is official");
})

event.setMaxListeners(20)
console.log("finding the listener",event.getMaxListeners());
// event.on("checkPage", (sc, msg) => {
//     console.log(`status code is ${sc} and the message is ${msg}`);
// })
event.emit("sayMyName")

event.emit("checkPage",200,'ok')