# airline-system2 update 
## Introduction 
* Socket.IO
is a JavaScript library for real-time web applications. It enables real-time, bi-directional communication between web clients and servers. It has two parts − a client-side library that runs in the browser, and a server-side library for node.js. Both components have an identical API
* Real-time Applications
* Instant messengers

* Push Notifications

* Collaboration Applications

* Online Gaming

### we have to prepare express server using npm , and we have to install socket io
 * we can Installe socket io  and socket io - client , using npm 


### What I did in this lap 

* First I have to update the system file to do this functionality :
system.js file:
* Add new object called 'queue' that have One property (flights) to contain all 'new-flight' events.

* Inside 'new-flight' event handler create a new ID for the flight and add it to the queue object (inside flights property).

* Listen to new event 'get-all':

* Once triggered should emit 'flight' event with all stored messages as payload back to the pilot.
* Delete all messages from the message queue.

* 2nd the pilote should do this functionality 
pilot.js file:
* trigger 'get-all' event, to get all messages back from the message queue.

* After triggering the 'flight-arrived' event make sure to delete the flight from the message queue.(Strech Goal)

* Listen to 'fligt' event to log this message to the console 'Pilot:Sorry i didn't catch this flight ID 332u443673r32yuf463'.

### the main Idea of this task is if there any user is dissconected , so we need to save all massagegs then when he back online so we will send hime all saved massage 

### also in this lap we learn new thing , is to read from the console using console.log('process argv ', process.argv); , this I will keep as reminder , because we didnt use it 

* let see all the result in the console , each in single page 
* this is the systm page where all connected 
![link](./Image/Screenshot%20(328).png)
* also I added a notification in the event for each flight will be added to the massage Queue
![link](./Image/Screenshot%20(329).png)

* now we will check when the pilot is dissconected and then he connected so he will get all massages 
![link](./Image/Screenshot%20(330).png)

* and after that we will see the system will get notification from the pilot and it will delete the massage Queue
![link](./Image/Screenshot%20(331).png)




