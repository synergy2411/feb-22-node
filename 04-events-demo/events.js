// const EventEmitter = require("events").EventEmitter;

// const emitter = new EventEmitter();


// // emit() : produces the events
// // on() : register the listeners

// emitter.on("newListener", (eventName, listenerFn) => {
//     console.log("New Listener attached for event " + eventName)
// })

// emitter.on("removeListener", (eventName) => {
//     console.log("Listener removed from ", eventName)
// })

// const listenerFoo = (data) => console.log("Foo listener fired with message - ", data.message)

// emitter.on("foo", listenerFoo)

// emitter.on("foo", (data) => {
//     console.log("Foo Event Fired with message - ", data.message)
//     emitter.removeListener("foo",listenerFoo);
// })

// emitter.emit("foo", {message : "SUCCESS"})
// emitter.emit("foo", {message : "WARNING"})




// process.on("exit", (code) => {
//     console.log("Process is about to exist with code ", code);
// })


// process.exit(1);


process.on("uncaughtException", () => {
    console.log('Error Handler working')
})

nonExistingFn();