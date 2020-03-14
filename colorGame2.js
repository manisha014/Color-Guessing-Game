var numSquares = 6;
var clicks;
var colors;
var correctColor;
var correctColorDisplay = document.querySelector(".correctColor");
var squares = document.querySelectorAll(".square");
var resultDisplay = document.querySelector(".resultDisplay");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector(".resetButton");
var mode = document.querySelectorAll(".mode");

init();

function init() {
    setUpModes();
    setUpSquares();
    reset();
}

function reset() {
    clicks = 0;
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colors";
    resultDisplay.textContent = "";
    colors = generateRandomColors(numSquares);
    correctColor = correctColour();
    correctColorDisplay.textContent = correctColor;
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.background = colors[i];
            squares[i].style.display = "block";
        } else {
            squares[i].style.display = "none";
        }

    }
}

function setUpModes() {
    for (var i = 0; i < mode.length; i++) {
        mode[i].addEventListener("click", function() {
            mode[0].classList.remove("selected");
            mode[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent == "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        });
    }
}

function setUpSquares() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function() {
            var chosen = this.style.backgroundColor;
            if (chosen != "rgb(35, 35, 35)") {
                clicks++;
                if (clicks == numSquares - 1) {
                    //(numSquares == 6 && clicks == 5) || (numSquares == 3 && clicks == 2)
                    alert("You lost the game!");
                    reset();
                } else if (chosen === correctColor) {
                    changeColor(correctColor);
                    resultDisplay.textContent = "Correct!";
                    h1.style.backgroundColor = correctColor;
                    resetButton.textContent = "Play Again?";
                } else {
                    this.style.backgroundColor = "#232323";
                    resultDisplay.textContent = "Try Again!";
                }
            }



        });
    }
}

function generateRandomColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr[i] = randomColor();
    }
    return arr;

}

function correctColour() {
    var num = Math.floor(Math.random() * colors.length);
    return colors[num];

}

function randomColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return ("rgb(" + red + ", " + green + ", " + blue + ")");
}

function changeColor(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}
resetButton.addEventListener("click", function() {
    reset();
});