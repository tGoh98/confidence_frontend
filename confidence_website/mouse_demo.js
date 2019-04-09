//mouse_demo.js


// MOUSE MOVEMENT STUFF
// Tracking arrays
var movement1 = [];
var movement2 = [];
var movement3 = [];
var movement4 = [];
var movement5 = [];
var whichMovement = movement1;
// Timing variables
var date = new Date();
var lastTime = date.getTime();
// Constants
const fullArrayLength = 10000; // if one reading every 1 ms for 10 seconds

// jQuery to get mousemovement
$(document).ready(function(){
  $(document).mousemove(function(event){
    //$("#mPos").text(event.pageX + ", " + event.pageY);
    updateTracking(event.pageX + " " + event.pageY);
  });
});

// Called whenever mouse moves
function updateTracking(xPos, yPos) {
  // Check if array is full
  if(whichMovement.length == fullArrayLength) {
    whichMovement = null;
  }

  // Update array if not null
  if(whichMovement != null) {
    // Deal with case where mouse has been stationary

    whichMovement.push([xPos, yPos]);

  }
}

// Called when answerButton clicked
function answerChosen() {
  // pad array until full if not full
 if(whichMovement.length != fullArrayLength) {
   for(i=whichMovement.length; i<fullArrayLength; i++) {
     whichMovement.push([0,0]);
   }
 }
  // Stop updating array
  whichMovement = null
  alert(whichMovement);
}


// CHANGING TEXT STUFF
// To keep track of which question the user is on
var questionCount = 0;

function changeText() {
  // Reset button colors
  document.getElementById("yesButton").className = "button fit";
  document.getElementById("naButton").className = "button fit";
  document.getElementById("noButton").className = "button fit";

  // Changes the text question
  if (questionCount == 0) {
    document.getElementById("questionText").innerHTML = "Did you apply to Rice University?";
  } else if (questionCount == 1) {
    document.getElementById("questionText").innerHTML = "Was your first pet a hamster?";
  } else if (questionCount == 2) {
    document.getElementById("questionText").innerHTML = "Were you born in Houston?";
  } else if (questionCount == 3) {
    document.getElementById("questionText").innerHTML = "Was Google the first company you worked for?";
  } else if (questionCount == 4) {
    document.getElementById("questionText").innerHTML = "Was your first car a Honda Accord?";
  } else {
    // Display results after 5 questions
    doResults();
  }
  alert(whichMovement);
  // Change which array to update
  if(whichMovement == movement1) {
    whichMovement = movement2;
  } else if(whichMovement == movement2) {
    whichMovement = movement3;
  } else if(whichMovement == movement3) {
    whichMovement = movement4;
  } else if(whichMovement == movement4) {
    whichMovement = movement5;
  } else {
    whichMovement = null;
  }

  questionCount++;
}

function changeButtonColor(id) {
  // Toggles button color on click

  // End mouse tracking
  answerChosen();

  // Reset all other Buttons
  document.getElementById("yesButton").className = "button fit";
  document.getElementById("naButton").className = "button fit";
  document.getElementById("noButton").className = "button fit";

  // Change new button
  var curState = document.getElementById(id).className;
  if (curState == "button fit") {
    document.getElementById(id).className = "button primary fit";
  } else {
    document.getElementById(id).className = "button fit";
  }
}


// RESULTS STUFF
function doResults() {
  // Hide answer text and questions
  document.getElementById("answerButtons").style.display = "none";
  document.getElementById("nextButton").style.display = "none";
  document.getElementById("questionText").style.display = "none";

  // Show results text
  document.getElementById("resultsText").style.display = "inline";
}
