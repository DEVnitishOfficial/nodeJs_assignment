
// In continuation of the 8th question, let's now explore the concept of the maximum number of listeners
// allowed for event handlers1 For this coding challenge, your task is to determine the current maximum
// number of event listeners associated with an event and then set the maximum number of event listeners to
// 51 Note that the default maximum number of listeners might vary1 Your task is to limit the number of listeners
// to 51

const EventEmitter = require ("events");

const event_emitter = new EventEmitter();
const subscribeMessage = (channelName) => {
    console.log(`Thanks for subscribing ${channelName}`);
}


event_emitter.addListener("subscribe",subscribeMessage)

event_emitter.emit("subscribe","nitish official");

console.log(`The default maximum event listener is : ${event_emitter.getMaxListeners()}`);

event_emitter.setMaxListeners(7)

console.log(`The updated maximum event listener is : ${event_emitter.getMaxListeners()}`);
