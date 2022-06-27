`use strict`
require('dotenv').config();
const io = require('socket.io-client');
let host = `http://localhost:${process.env.PORT}/`;


const systemConnection = io.connect(host);

systemConnection.on("new-Flight", handleNewFlight);

function handleNewFlight(payload) {
  
        console.log(`Manager: new flight with ID ${payload.Flight.Details.flightID} have been scheduled`);
    
}
systemConnection.on('arrived', handleNewArrived);

function handleNewArrived(payload) {
  
        console.log(` Manager: we're greatly thankful for the amazing flight, ${payload.Flight.Details.pilot}`);
    
}