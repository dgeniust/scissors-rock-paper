let userScore=0;
let computerScore=0;
let userScore_span=document.getElementById("userScore");
let compScore_span=document.getElementById("compScore");
const scoreBoard_div=document.querySelector(".scoreBoard");
const result_p=document.querySelector(".result > p");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissors_div=document.getElementById("s");
const imgRobot_div=document.querySelector(".robotImg");
const winner = './robothappy.gif';
const loser = './robotconfused.gif';
const drawer = './robotjump.gif';
 

function robotNotice (imageStatus) {
    imgRobot_div.children[0].hidden=false;
    imgRobot_div.children[0].src=imageStatus;
    // setTimeout(function (){
    //     imgRobot_div.children[0].hidden=true;
    // }, 3000);
}

function myTimeOut() {
    setTimeout(robotNotice,3000);
}

function clearTime() {
    clearTimeout(myTimeOut);
}


function getCompchoice() {
    const choices = ['r', 'p', 's'];
    const randomNum = Math.floor(Math.random()*3);
    return choices[randomNum];
}

function convertToWord(letter) {
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissors";
}
function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = computerScore;
    const smallUserWord = "👶".fontsize(5).sup();
    const smallComprWord = "🖥️".fontsize(5).sup();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallComprWord} . You win! 🔥 `;
    confetti();
    robotNotice(winner);
}
function lose(userChoice,computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = computerScore;
    const smallUserWord = "👶".fontsize(5).sup();
    const smallComprWord = "🖥️".fontsize(5).sup();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallComprWord} . You lost! 😭`;
    robotNotice(loser);
}
function draw(userChoice, computerChoice) {
    const smallUserWord = "👶".fontsize(5).sup();
    const smallComprWord = "🖥️".fontsize(5).sup();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallComprWord} . It's a draw! 🍀`;
    robotNotice(drawer);
}
function game(userChoice) {
    const computerChoice = getCompchoice();
    switch(userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

rock_div.addEventListener('click', function () {
    game("r");
})

paper_div.addEventListener('click', function () {
    game("p");
})

scissors_div.addEventListener('click', function () {
    game("s");
})

function restart_score() {
    location.reload();
}

// Hiệu ứng Confetti
var duration = 15 * 10000;
var animationEnd = Date.now() + duration;
var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

var interval = setInterval(function() {
  var timeLeft = animationEnd - Date.now();

  if (timeLeft <= 0) {
    return clearInterval(interval);
  }

  var particleCount = 50 * (timeLeft / duration);
  // since particles fall down, start a bit higher than random
  confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
  confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
}, 550);
