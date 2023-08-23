

// 9. While working with the events module, one interesting observation is that when an event is created and
// called, the associated event handler is triggered1 However, what happens if we remove an event and then
// try to call it? In this coding challenge letes create an event handler and call it1 Later letes remove the event
// handler and observe what happens when we call it0
// const EventEmitter = require ("events");

const event_emitter = new EventEmitter();

const subscribeMessage = (channelName) => {
    console.log(`Thanks for subscribing ${channelName}`);
}

event_emitter.addListener("subscribe",subscribeMessage);

console.log("calling the eventListener before removing the event");
event_emitter.emit("subscribe","college wallah")

console.log("calling the eventListener after removing the event");
event_emitter.removeListener("subscribe",subscribeMessage)

event_emitter.emit("subscribe","college wallah")