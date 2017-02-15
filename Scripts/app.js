/* JavaScript lives here */
/* forces you to use semi-colons, and it also makes you declare var or let */
"use strict";

// IIFE
(function(){ 

console.log("App Started");
console.info(`Page Title: ${document.title}`);

switch (document.title) {

case "Home":

    //declare and initialize the firstHeading variable
    //the firstHeading variable creates a reference the h1 element on the page
    let firstHeading = document.getElementById("firstHeading");

    firstHeading.style.color = "#FF00FF";
    firstHeading.style.fontWeight = "500";
    firstHeading.style.fontStyle = "italic";
    firstHeading.style.opacity = "0.5";


    //THREE STEPS FOR INJECTING CONTENT ONTO page
    //STEP 1 - Create a reference to an element (reference variable)
    let FirstParagraph = document.getElementById("firstParagraph");
    let SecondParagraph = document.getElementById("secondParagraph");

    //STEP 2 - Create a variable that contains CONTENT (content variable)
    let myContent = "It was a sunny day in Florida. It felt great. I love the sun.";
    let myHTMLContent = `<h2>Second Heading</h2>
                         <p>This is an inner paragraph to the second paragraph</p>`;

    //STEP 3 - Assign the variable with your content to the textContent property of the reference variable (operation)
    FirstParagraph.textContent = myContent;
    SecondParagraph.innerHTML = myHTMLContent;

    //Assigns the button in our index to a variable
    let clickMeButton = document.getElementById("clickMeButton");

    //adds an event listener to trigger when the clickMeButton is clicked. It will call the Click function.
    clickMeButton.addEventListener("click", Click);

    // create a Click function, which will log to the console when we click. Used as an event handler.
    function Click() {
        console.log("Clicked...");
    }

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




