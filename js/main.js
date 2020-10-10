var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

var dotGap = 20;

var windowRowNumber = Math.floor(windowWidth / dotGap);
var windowColumnNumber = Math.floor(windowHeight / dotGap);

function createDotMatrix() {
    for (var i=0; i<windowRowNumber; i++) {
        for (var j=0; j<windowColumnNumber; j++) {
            var xPosition = (windowWidth/windowRowNumber) * (i);
            var yPosition = (windowHeight/windowColumnNumber) * (j);
            
            let addDot = document.createElement('a');
            
            addDot.classList.add('dot');
            addDot.style.top = `${yPosition}px`;
            addDot.style.left = `${xPosition}px`;
            
            document.getElementById("dot-container").appendChild(addDot);
        }
    }
}

createDotMatrix()

let allDots = document.querySelectorAll(".dot");

document.querySelectorAll(".dot").forEach(item => {
    item.addEventListener("mouseover", event => {
        item.style.backgroundColor = "#fff";
    });
    item.addEventListener("mouseout", event => {
        item.style.backgroundColor = null;
    });
    
    item.addEventListener("mousedown", event => {
        if (item.classList.contains("green")) {
            item.classList.remove("green");
            item.classList.add("red");
        } else if (item.classList.contains("red")) {
            item.classList.remove("red");
            item.classList.add("blue");
        } else if (item.classList.contains("blue")) {
            item.classList.remove("blue");
            item.classList.add("green");
        } else {
            item.classList.add("blue");
        }
    });
});