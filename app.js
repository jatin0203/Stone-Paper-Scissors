let userScore=0;
let compScore=0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div=document.querySelector(".score-borad");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");


function getCompChoice(){
    const choices = ['rock','paper','scissors'];
    const index = Math.floor(3*Math.random());
    return choices[index];
}

function win(userChoice,compChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallcompWord = "comp".fontsize(3).sub();
    result_p.innerHTML= `${userChoice}${smallUserWord} beats ${compChoice}${smallcompWord}. You Win!!"`;

    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function(){ document.getElementById(userChoice).classList.remove("green-glow")},300);
}


function lose(userChoice,compChoice){
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallcompWord = "comp".fontsize(3).sub();
    result_p.innerHTML= `${userChoice}${smallUserWord} Loses to ${compChoice}${smallcompWord}. You Lost!!"`;

   
     document.getElementById(userChoice).classList.add('red-glow');setTimeout(function(){ document.getElementById(userChoice).classList.remove("red-glow")},300);
}

function draw(userChoice,compChoice){

    const smallUserWord = "user".fontsize(3).sub();
    const smallcompWord = "comp".fontsize(3).sub();
    result_p.innerHTML= `${userChoice}${smallUserWord} draws to ${compChoice}${smallcompWord}. Try Again!!"`;

    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(function(){ document.getElementById(userChoice).classList.remove("gray-glow")},300);
}

function game(userChoice){
    const compChoice = getCompChoice();
    switch(userChoice + compChoice){
        case "rockscissors":
        case "paperrock" :
        case "scissorspaper":
            win(userChoice,compChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(userChoice,compChoice);
            break;
        default:
            draw(userChoice,compChoice);
    }
}


function main(){
    rock_div.addEventListener('click',()=> game("rock"))
    paper_div.addEventListener('click',function(){
            game("paper");
    })
    scissors_div.addEventListener('click',function(){
            game("scissors");
    })
}


main();


