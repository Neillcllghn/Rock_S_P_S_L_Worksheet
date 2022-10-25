let choices = ["rock", "paper", "scissors", "lizard", "spock"];
let i = Math.floor(Math.random() * 5);
let computerChoice = choices[i];


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


