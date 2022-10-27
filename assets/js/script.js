let choices = ["rock", "paper", "scissors", "lizard", "spock"];
let i = Math.floor(Math.random() * 5);
let computerChoice = choices[i];

//adding an event listener to all the buttons
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    
    for(let button of buttons) {
        button.addEventListener("click", function () {
            let userChoice = this.getAttribute("data-type");
            game(userChoice);
        });
    } function game(userChoice) { 
        if(userChoice === "paper" && computerChoice === "rock" || userChoice === "rock" && computerChoice === "scissors" || userChoice === "scissors" && computerChoice === "paper" || userChoice === "rock" && computerChoice === "lizard" || userChoice === "lizard" && computerChoice === "spock" || userChoice === "spock" && computerChoice === "scissors" || userChoice === "scissors" && computerChoice === "lizard" || userChoice === "lizard" && computerChoice === "paper" || userChoice === "paper" && computerChoice === "spock" || userChoice === "spock" && computerChoice === "rock") {
            winScore();
        } else if (userChoice === computerChoice) {
            drawScore();
        } else {
            loseScore();
        }
        
    }

    
});



function winScore () {
    let winPoints = parseInt(document.getElementById("win").innerText);
    document.getElementById("win").innerText = ++winPoints;
    document.getElementById("result").innerHTML = "<p>Congradulations....You Win!!!</p>";

    let message = document.getElementById("result");
    message.style.color = "green";


}

function drawScore () {
    let drawPoints = parseInt(document.getElementById("draw").innerText);
    document.getElementById("draw").innerText = ++drawPoints;
    document.getElementById("result").innerHTML = "<p>It is a draw!</p>";

    let message = document.getElementById("result");
    message.style.color = "orange";
}

function loseScore () {
    let losePoints = parseInt(document.getElementById("lose").innerText);
    document.getElementById("lose").innerText = ++losePoints;
    document.getElementById("result").innerHTML = "<p>Sorry, You lost!</p>";

    let message = document.getElementById("result");
    message.style.color = "red";
}


