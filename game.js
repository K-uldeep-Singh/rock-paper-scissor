let userScore = 0;
let comScore = 0;


const choices = document.querySelectorAll(".choice");
let msgBox = document.querySelector("#msg")
const gameDraw = () => {
    // console.log("Match Draw");
    msgBox.innerHTML = "Match Draw";
    msgBox.style.backgroundColor = "green";
    msgBox.style.color = "black";
}
const userScoreBox = document.querySelector("#user-score");
const compScoreBox = document.querySelector("#comp-score");

const showWinner = (userWin, compChoice, userChoice) => {
    if (userWin) {
        userScore++;
        userScoreBox.innerText = userScore;
        msgBox.innerText = `Congrats You Win!!  your ${userChoice} beats ${compChoice}`;
        msgBox.style.backgroundColor = "red";
        msgBox.style.color = "black";
        // console.log("you Win");
        // userScoreBox.innerHTML = userScoreBox.innerHTML + 1;
    }
    else {
        comScore++;
        compScoreBox.innerText = comScore;
        msgBox.innerText = `Oops You Lose!! computer's ${compChoice} beats your ${userChoice} `;
        msgBox.style.backgroundColor = "purple";
        msgBox.style.color = "black";
        // console.log("You Lose");
        // compScoreBox.innerHTML = compScoreBox.innerHTML + 1;
    }
}

const genCompChoice = () => {
    const options = ["Rock", "Paper", "Scissor"];
    const indx = Math.floor(Math.random() * 3);
    return options[indx];
}
const playGame = (userChoice) => {
    console.log("user choice =", userChoice);
    const compChoice = genCompChoice();
    console.log("computer Choice =", compChoice);

    if (userChoice === compChoice) {
        gameDraw();
    }
    else {
        userWin = true;
        if (userChoice === "Rock") {//paper scissor
            userWin = compChoice === "Paper" ? false : true;
        }
        else if (userChoice === "Paper") {//rock scissor
            userWin = compChoice === "Scissor" ? false : true;
        }
        else {
            // paper rock
            userWin = compChoice === "Rock" ? false : true;
        }
        showWinner(userWin , compChoice, userChoice);
    }

}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("Choice was clicked", userChoice);
        playGame(userChoice);

    })

})