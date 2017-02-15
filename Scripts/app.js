/* JavaScript lives here */
/* forces you to use semi-colons, and it also makes you declare var or let */
"use strict";

// IIFE
(function(){ 

let data = {

"games": [
    {
        "name": "Fallout 4",
        "cost": 69.99,
        "rating": 4.3
    },
    {
        "name": "Overwatch",
        "cost": 49.99,
        "rating": 4.5
    },
    {
        "name": "Horizon Zero Dawn",
        "cost": 69.99,
        "rating": 4.1
    }
 
]
};


switch (document.title) {

case "Home":

    //created a hook into our UI into back end JS
    let gameListBody = document.getElementById("gameListBody");

    //for each game in data.games, do this this...
    data.games.forEach(function(game){

        //inject a template row inside the dataRows div tag
        let newRow = document.createElement("tr")

        newRow.innerHTML = `
        <tr>
            <td class="text-center">${game.name}</td>
            <td class="text-center">${game.cost}</td>
            <td class="text-center">${game.rating}</td>
        </tr>
        `;

        gameListBody.appendChild(newRow);
    }, this);

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




