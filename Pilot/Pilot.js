'use strict';
require('dotenv').config();
const io = require('socket.io-client');
let host = `http://localhost:${process.env.PORT}/airLine`;
const pilotConnection = io.connect(host);


pilotConnection.on("new-Flight", handleNewFlight);

pilotConnection.emit("get-all")
pilotConnection.on('flight', (flight) => {

  console.log(`Pilot:Sorry i didnt catch  this flight ${flight.id}`, flight);
  pilotConnection.emit('received', flight);

})
function handleNewFlight(payload) {
    setTimeout(() => {

        payload.Flight.event='took-off';
      console.log(`Pilot: flight with ID ${payload.Flight.Details.flightID} took-off`)
      pilotConnection .emit('took_off', payload);
    //   console.log(payload)
          
      }, 4000)
      setTimeout(() => {
 
        payload.Flight.event='arrived';
      console.log(`Pilot: flight with ID ${payload.Flight.Details.flightID} arrived`)
      pilotConnection.emit('arrived', payload);
          
   
      }, 7000)
}

