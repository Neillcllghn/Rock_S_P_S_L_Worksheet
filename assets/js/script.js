let choices = ["rock", "paper", "scissors", "lizard", "spock"];
let i = Math.floor(Math.random() * 5);
let computerChoice = choices[i];


document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    //could have used (let i = 0; i < buttons.length; i++), allows us to iterate the array of buttons
    for(let button of buttons) {
        //adding button listner and giving each button a function to execute.
        button.addEventListener("click", function () {
            //'this' refers to the button that is clicked that has a submit attribute
            let userChoice = this.getAttribute("data-type");
            game(userChoice);
        })
    }

    
})



function game(userChoice) { 
    if(userChoice === "paper" && computerChoice === "rock" || userChoice === "rock" && computerChoice === "scissors" || userChoice === "scissors" && computerChoice === "paper" || userChoice === "rock" && computerChoice === "lizard" || userChoice === "lizard" && computerChoice === "spock" || userChoice === "spock" && computerChoice === "scissors" || userChoice === "scissors" && computerChoice === "lizard" || userChoice === "lizard" && computerChoice === "paper" || userChoice === "paper" && computerChoice === "spock" || userChoice === "spock" && computerChoice === "rock") {
        alert("Congradulations....You Win!!!");
        winScore();
    } else if (userChoice === computerChoice) {
        alert ("It is a draw!");
        drawScore();
    } else {
        alert ("Sorry! You lost!");
        loseScore();
    }
    function continuGame() {
        i = Math.floor(Math.random() * 5);
        computerChoice = choices[i];
    }
    setTimeout(continuGame);
}



function winScore () {
    let winPoints = parseInt(document.getElementById("win").innerText);
    document.getElementById("win").innerText = ++winPoints;
}

function drawScore () {
    let drawPoints = parseInt(document.getElementById("draw").innerText);
    document.getElementById("draw").innerText = ++drawPoints;
}

function loseScore () {
    let losePoints = parseInt(document.getElementById("lose").innerText);
    document.getElementById("lose").innerText = ++losePoints;
}


