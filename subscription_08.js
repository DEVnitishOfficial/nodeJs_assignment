// 08.  
// Let's simulate a subscription feature similar to YouTube. Using the events module, we'll create a custom
// event named "subscribe". When this event is triggered, it should display a message in the console indicating
// that the user has subscribed.

const EventEmitter = require('events');

const eventEmitters = new EventEmitter();

const subscribeMessage = (channelName) => {
    console.log(`Thanks for subscribing to ${channelName}`);
}

eventEmitters.addListener("subscribe", subscribeMessage);
eventEmitters.emit("subscribe", "college wallah");
