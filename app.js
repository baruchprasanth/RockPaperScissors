let userScore =0;
let computerScore = 0;

const dvUserScore_span = document.getElementById("user-score");
const dvCompScore_span = document.getElementById("comp-score");
const dvScoreBoadrd_div = document.querySelector(".score-board");
const dvResult_div = document.querySelector(".result > p");
const dvRock_div = document.getElementById("r");
const dvPaper_div = document.getElementById("p");
const dvScissor_div = document.getElementById("s");
const dvActionMsg = document.getElementById("action-message");

function reset(){
    dvRock_div.style.borderColor="white";
    dvPaper_div.style.borderColor="white";
    dvScissor_div.style.borderColor="white";
    dvActionMsg.innerHTML = "Make Your Move Now!"
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    const allChoice=userChoice+computerChoice;
    console.log(allChoice);
    switch(allChoice) {
        case "rs":
            userScore++; dvUserScore_span.innerHTML =userScore;
            dvResult_div.innerHTML = "Rock Breaks Scissors. You Win!!";
            break;
        case "pr":
            userScore++; dvUserScore_span.innerHTML =userScore;
            dvResult_div.innerHTML = "Paper Covers Rock. You Win!!";
            break;
        case "sp":
            dvResult_div.innerHTML = "Scissor Cuts Paper. You Win!!";
            userScore++; dvUserScore_span.innerHTML =userScore;
            break;
        case "sr":
            dvResult_div.innerHTML = "Rock Breaks Scissors. You Lose!!";
            computerScore++; dvCompScore_span.innerHTML=computerScore;
            break;
        case "rp":
            dvResult_div.innerHTML = "Paper Covers Rock. You Lose!!";
            computerScore++; dvCompScore_span.innerHTML=computerScore;
            break;
        case "ps":
            dvResult_div.innerHTML = "Scissor Cuts Paper. You Lose!!";
            computerScore++; dvCompScore_span.innerHTML=computerScore;
            break;
        case "rr":
            dvResult_div.innerHTML = "Both Chose Same. Draw!!";
        case "pp":
            dvResult_div.innerHTML = "Both Chose Same. Draw!!";
        case "ss":
            dvResult_div.innerHTML = "Both Chose Same. Draw!!";
            break;
        }
        dvActionMsg.innerHTML = "Wait for Next Round..."
        setTimeout(() => {
            reset();
        }, 2000);    

}

function getComputerChoice(){
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random()*3);
    switch(choices[randomNumber]){
        case "r":
            dvRock_div.style.borderColor="red";
            break;
        case "p":
            dvPaper_div.style.borderColor="red";
            break;
        case "s":
            dvScissor_div.style.borderColor="red";        
            break;
    }
    return choices[randomNumber];
    
}

function main(userChoice){

dvRock_div.addEventListener('click', function()
{
    dvRock_div.style.borderColor="green";
    game("r");
})

dvPaper_div.addEventListener('click', function()
{
    game("p");
    dvPaper_div.style.borderColor="green";
})

dvScissor_div.addEventListener('click', function()
{
    game("s");
    dvScissor_div.style.borderColor="green";
})

}


main();