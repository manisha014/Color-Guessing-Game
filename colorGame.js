var numSquares = 6;
var colors = generateRandomColors(numSquares);;
var correctColorDisplay = document.querySelector(".correctColor");
var squares = document.querySelectorAll(".square");
var resultDisplay = document.querySelector(".resultDisplay");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector(".resetButton");
var easyBtn = document.querySelector(".easy");
var hardBtn = document.querySelector(".hard");


var correctColor = correctColour();
correctColorDisplay.textContent = correctColor;

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
for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
    squares[i].addEventListener("click", function() {
        var chosen = this.style.backgroundColor;
        if (chosen === correctColor) {
            changeColor(correctColor);
            resultDisplay.textContent = "Correct!";
            h1.style.backgroundColor = correctColor;
            resetButton.textContent = "Play Again?";
        } else {
            this.style.backgroundColor = "#232323";
            resultDisplay.textContent = "Try Again!";
        }
    });
}
easyBtn.addEventListener("click", function() {
    h1.style.backgroundColor = "steelblue";
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    correctColor = correctColour();
    correctColorDisplay.textContent = correctColor;
    for (var i = 0; i < squares.length; i++) {
        if (i < 3) {
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }

    }

});

hardBtn.addEventListener("click", function() {
    h1.style.backgroundColor = "steelblue";
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    correctColor = correctColour();
    correctColorDisplay.textContent = correctColor;
    for (var i = 0; i < squares.length; i++) {
        if (i < 3) {
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        }
    }
});

resetButton.addEventListener("click", function() {
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colors";
    resultDisplay.textContent = "";
    colors = generateRandomColors(numSquares);
    correctColor = correctColour();
    correctColorDisplay.textContent = correctColor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
    }
});