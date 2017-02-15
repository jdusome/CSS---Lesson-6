/* JavaScript lives here */
/* forces you to use semi-colons, and it also makes you declare var or let */
"use strict";

// IIFE
(function(){ 


switch (document.title) {

case "Home":

    let data;

    //STEP 1 - instantiate an XHR object of a new XMLHttpRequest
    let XHR = new XMLHttpRequest();

    //STEP 2 - Open the JSON file
    //arguments - GET/POST, URL, Async (True or False)
    XHR.open("GET", "../games.json", true);

    //STEP 3 - Initiate the call (send out a call to the XHR object)
    //you can also add a filter if you are looking for a particular document
    XHR.send(null);

    //Step 4 - Listen for ready state for be 4
    //Creates a handler to be done when the 
   
    XHR.addEventListener("readystatechange", function(){

         //There are different ready states that represent the stage of data transfer, 4 means done
         //There are different server status codes that represent state of server, 200 means all is good
        if((XHR.readyState === 4) && (XHR.status === 200)){

            //convert the response text into a JSON file
            data = JSON.parse(this.responseText);

        }

    });

    //STEP 5 - wait until data is finished loading before injecting it into the document
    XHR.addEventListener("load", function(){

        //created a hook into our UI into back end JS
    let gameListBody = document.getElementById("gameListBody");

    //for each game in data.games, do this this...
    data.games.forEach(function(game){

        //create a new table row element called newRow
        let newRow = document.createElement("tr")

        //insert HTML within the newly created element
        newRow.innerHTML = `
        <tr>
            <td class="text-center">${game.name}</td>
            <td class="text-center">${game.cost}</td>
            <td class="text-center">${game.rating}</td>
        </tr>
        `;

        //append the element on to the gameListBody
        gameListBody.appendChild(newRow);
       }, this);

    });


    

    break;

    case "Projects":

    //setup references to all elements we need to hook into
    let HideButton = document.getElementById("HideButton");
    let HalfSizeButton = document.getElementById("HalfSizeButton");
    let ThreeQuarterSizeButton = document.getElementById("ThreeQuarterSizeButton");
    let ShowButton = document.getElementById("ShowButton");
    let FirstProjectImage = document.getElementById("FirstProjectImage");

    let ButtonArray = [HideButton, HalfSizeButton, ThreeQuarterSizeButton, ShowButton];

    //create a for statemento assign even listeners to each button in the array
    ButtonArray.forEach(function(button) {

        button.addEventListener("click", function(event){

            //store which button has been clicked in current button
            let currentButton = button.getAttribute("id")

            switch (currentButton){
                case "HideButton":
                    FirstProjectImage.style.visibility = "hidden";
                break;
                case "HalfSizeButton":
                    FirstProjectImage.style.width = "50%";                 
                break;
                case "ThreeQuarterSizeButton":
                    FirstProjectImage.style.width = "75%"; 
                break;
                case "ShowButton":
                    FirstProjectImage.style.visibility = "visible";
                    FirstProjectImage.style.width = "100%";
                break;
        };

    }, this);

    });

    //Create one event listener for all of them


    
    break;

    case "Contact":

    break;

} //end case

})(); //end of the IIFE (immediately invoked function express)




