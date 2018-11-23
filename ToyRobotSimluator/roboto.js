// Make sure you disable local file restrictions if viewing in Safari or Firefox 


// Declare the globals
let roboto = document.getElementById('roboto');
let xPos, yPos, direction;

//Start logging
let reportLog = document.getElementById("reportLog");

// Set Mr Roboto's start position and direction according to the input values
// Reporting is automatical, because why the hell not?

function placeRobot() {

    let x = document.getElementById("x");
    let y = document.getElementById("y");
    let f = document.getElementById("f");
    xPos = parseInt((x.options[x.selectedIndex].value));
    yPos = parseInt((y.options[y.selectedIndex].value));
    direction = (f.options[f.selectedIndex].text);

    roboto.style.display = "block";
    roboto.style.left = xPos + "%";
    roboto.style.top = yPos + "%";
    roboto.className = direction;
	report();
}

//Move Mr Roboto in its current facing direction
function move() {
    if (Board()) {
        if (direction == "North") {
            if (yPos > 0) {
                yPos -= 20;
                roboto.style.top = yPos + "%";
            }

        } else if (direction == "South") {
            if (yPos < 80) {
                yPos += 20;
                roboto.style.top = yPos + "%";

            }
        } else if (direction == "East") {
            if (xPos < 80) {
                xPos += 20;
                roboto.style.left = xPos + "%";


            }
        } else if (direction == "West") {
            if (xPos > 0) {
                xPos -= 20;
                roboto.style.left = xPos + "%";
            }
        }
        if ((xPos == 80 && direction == "East") || (yPos == 80 && direction == "South") || (xPos == 0 && direction == "West") || (yPos == 0 && direction == "North")) {
			console.log("Change direction!");
			roboto.classList.add("edge");

        } else if ((xPos != 80 && direction == "East") || (yPos != 80 && direction != "South") || (xPos != 0 && direction != "West") || (yPos != 0 && direction != "North")) {
        	roboto.classList.remove("edge");
        
        }
        if (reportLog.style.visibility == "visible") {
            reportLog.innerHTML = `PLACE  ${xPos}, ${yPos}, ${direction}`
        }
    } else {
        console.log("Mr Roboto has left the board");
    }
	report();

}

//turn to the left
function turnLeft() {
    if (Board()) {
        if (direction == "North") {
            direction = "West"
        } else if (direction == "West") {
            direction = "South"
        } else if (direction == "South") {
            direction = "East";
        } else if (direction == "East") {
            direction = "North"
        }
        roboto.className = direction;
    } else {
        console.log("Mr Roboto has left the board");
    }
}

//turn to the right
function turnRight() {
    if (Board()) {
        if (direction == "North") {
            direction = "East";

        } else if (direction == "West") {
            direction = "North"
        } else if (direction == "South") {
            direction = "West"
        } else if (direction == "East") {
            direction = "South"

        }
        roboto.className = direction;
    } else {
        console.log("Mr Roboto has left the board");
    }
}

//Where is Mr Roboto? 
function report() {
    reportLog.innerHTML = `PLACE  ${xPos}, ${yPos}, ${direction}`
}

// Is Mr Roboto still on the board?
function Board() {

    let dir = ["North", "West", "East", "South"];

    if (!dir.includes(direction) || xPos < 0 || xPos > 80 || yPos < 0 || yPos > 80)
        return false;
    return true;
}