console.log("JavaScript File is linked");

//variables
const labels = document.querySelectorAll(".label");
const targetZones = document.querySelectorAll(".target-zone");
let currentDraggedElement = null;

//functions

function dragStart() {
    console.log("Drag Start Called");
    currentDraggedElement = this;
    console.log(currentDraggedElement);
}


function dragOver(event) {
    event.preventDefault();
}

function dragLeave(event) {
    if (currentDraggedElement){
}
}

function drop(event) {
    event.preventDefault();
    
    //checks that there is a label inside the drop zone already, if label is already dropped it will 'return back'
    if(this.querySelector(".label")) {
    console.log("This zone has a label");
    return;
    }

    this.appendChild(currentDraggedElement);
    currentDraggedElement = null;
}

//Event listeners

labels.forEach(label => {
    label.addEventListener("dragstart", dragStart);
});

targetZones.forEach(target => {
    target.addEventListener("dragover", dragOver);
    target.addEventListener("drop", drop);
    target.addEventListener("dragleave", dragLeave);
});

const resetButton = document.getElementById("reset-btn");
const labelBox = document.getElementById("label-box");

resetButton.addEventListener("click", () => {
    const droppedLabels = document.querySelectorAll(".target-zone .label");

    droppedLabels.forEach(label => {
        labelBox.appendChild(label);
    });
});
