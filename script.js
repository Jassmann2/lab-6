/****************** create variables ******************/
let modelName = ""; // Variable to hold the model name
let duration = 0; // Variable to hold the duration

/****************** helper function ******************/
function recalculate() {
    let costLabel = document.getElementById("calculated-cost"); // Get the span element for displaying cost
    let totalCost = 0; // Variable to hold the calculated total cost

    // Check the value of modelName and calculate total cost accordingly
    if (modelName === "XYZ") {
        totalCost = duration * 100;
    } else if (modelName === "CPRG") {
        totalCost = duration * 213;
    }

    // Set the innerHTML of the calculated-cost element to the new total cost
    costLabel.innerHTML = totalCost;
}

/****************** model button logic ******************/
let modelButton = document.getElementById("model-button"); // Get the "Switch Model" pseudo-button

function changeModel() {
    let modelText = document.getElementById("model-text"); // Get the span element for displaying model text

    // Check the current modelName and update accordingly
    if (modelName === "XYZ") {
        modelName = "CPRG";
        modelText.innerHTML = "Model CPRG";
    } else if (modelName === "CPRG") {
        modelName = "XYZ";
        modelText.innerHTML = "Model XYZ";
    }

    // Recalculate the total cost after changing the model
    recalculate();
}

modelButton.addEventListener("click", changeModel); // Attach click event listener to modelButton

/****************** duration button logic ******************/
let durationButton = document.getElementById("duration-button"); // Get the "Change Duration" pseudo-button

function changeDuration() {
    let durationText = document.getElementById("duration-text"); // Get the span element for displaying duration text
    let newDuration = prompt("Enter new duration:"); // Prompt user for new duration

    // Validate if newDuration is a valid number
    if (!isNaN(newDuration) && newDuration !== null) {
        duration = parseInt(newDuration); // Update duration variable with the new value
        durationText.innerHTML = duration; // Update the displayed duration
        recalculate(); // Recalculate the total cost with the new duration
    } else {
        alert("Please enter a valid number for duration.");
    }
}

durationButton.addEventListener("click", changeDuration); // Attach click event listener to durationButton
