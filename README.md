
React-mvp1 

this project makes an call to the API server and displays the related information to the React app. 



## Installation

install with npm

 run npm install then, 

to start both server's open the terminal then 
npm run start-server on the server.js, 

open a second terminal and run 
npm run start to start the React app.
## Appendix

to start both server's open the terminal
then npm run start-server on the server.js,
open a second terminal and run npm run start to start the React app.


the app.js component uses three pieces of state retaurant, searResults and reRender. 

This component makes an inital call to the server using a get request.
that information is then set to the restaurant state. 

The child component named Restaurants will be passed all three pieces of state from app.js
two new pieces of state are created named cuisine and RestaurantData
a call to the server is then made using axios and the data from that call is set to RestaurantData

two seperate functions are created named handleCuisineChange and handleCuisineBtn.
 
 the handleCuisineChange will set the state of cuisine to the users input.

the handleCuisineBtn will handle the search for a specific type of food related to a restaurant and once clicked will display the rendered information 

In the return statement a formi screated to handle the input and change once submit button is clicked. 

a seprate div is create to handle the information being outputted. 





