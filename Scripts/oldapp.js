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

    let image = new Image();
    image.src = FirstProjectImage.src;
    console.log(image.width);
    

    //Step 2 - setup event listeners (register event listeners) for each button
    HideButton.addEventListener("click", function(){
        FirstProjectImage.style.visibility = "hidden";
    });

    ShowButton.addEventListener("click", function(){
        FirstProjectImage.style.visibility = "visible";
        FirstProjectImage.style.width = "100%";
    });

    HalfSizeButton.addEventListener("click", function(){
        FirstProjectImage.style.width = "50%";
    });

    ThreeQuarterSizeButton.addEventListener("click", function(){
        FirstProjectImage.style.width = (image.width * 0.75) + "px";
        console.log(`Width: ${FirstProjectImage.getAttribute("this.width")}`);
    });


    
    break;

    case "Contact":

    

    break;

} //end case

})(); //end of the IIFE (immediately invoked function express)




