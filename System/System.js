require("dotenv").config()

const PORT=process.env.PORT || 3020
const ioSystem=require("socket.io")(PORT)

const airLine = ioSystem.of('/airLine');



ioSystem.on('connection', (socket) => {
    console.log('connected ', socket.id);


    socket.on("new-Flight", (payload) => {
        console.log("Flight",payload.Flight)
        ioSystem.emit("new-Flight",payload)

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
    });
  
});




