require("dotenv").config()
const uuid = require('uuid').v4;
const PORT=process.env.PORT || 3020
const ioSystem=require("socket.io")(PORT)

const airLine = ioSystem.of('/airLine');
const Queue={
      flights: {

      }
}


ioSystem.on('connection', (socket) => {
    console.log('connected ', socket.id);


    socket.on("new-Flight", (payload) => {
        console.log("Flight",payload.Flight)
        ioSystem.emit("new-Flight",payload)
    let id = uuid()
    Queue.flights[id]=payload
    socket.emit("added",payload)

    });
    


});


airLine.on('connection', (socket) => {
    console.log('connected to airLine ', socket.id);
    socket.on("new-Flight", (payload) => {
        airLine.emit("new-Flight", payload);
    });
    socket.on('took_off', (payload) => {
        console.log("Flight",payload.Flight)
        ioSystem.emit('took_off',payload)

    });
   
    socket.on('arrived', (payload) => {
        console.log("Flight",payload.Flight)
        ioSystem.emit("arrived",payload)
        socket.emit("arrived",Queue)
    });
    socket.on("get-all", () => {
        console.log('send all missied Flight to the pilot');

        Object.keys(Queue.flights).forEach((id) => {
            socket.emit('flight', {
                id: id,
                payload: Queue.flights[id]
            })
        })
    })
    socket.once('received',(flight)=>{
        delete Queue.flights[flight]
        console.log("all stored masseges in Queue deleted",Queue)
    })
});




