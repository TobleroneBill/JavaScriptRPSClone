var userScore = 0;          //scores
var CPUScore = 0;

const userScore_Span = document.getElementById("user-score");       //score elements
const CPUScore_Span = document.getElementById("computer-score");

const result_h1 = document.getElementById("win-message");           //wlt elements

const rock_Div = document.getElementById("r");                      //rps button elements
const paper_Div = document.getElementById("p");
const scissor_Div = document.getElementById("s");

const bgColour_Body = document.getElementById("body");                   //bg color element

function wordConvert(letter){               //converts rps letters into words for
    if(letter === 'r') return 'rock';       //element text
    if(letter === 'p') return 'paper';
    return 'scissors';
}
function CPUChoice(){                       //calculates cpu choice
    const choices = ['r','p','s'];
    const CPUChoice = Math.floor(Math.random() * 3);       //rounds down 0-2 choice
    return choices[CPUChoice];              //returns array from random index 0-2
}
function win(p,cpu){                //win function, that takes player and cpu input
    const userChoice_Div = document.getElementById(p); //gets choice based on p input
    userScore++;        //adds 1 to playerscore
    userScore_Span.innerHTML = userScore;   //sets elements numbers to score numbers
    CPUScore_Span.innerHTML = CPUScore;
    result_h1.innerHTML = wordConvert(p) + " beats " + wordConvert(cpu) + ". sicko mode dude.";  //win text
    userChoice_Div.classList.add('greenGlow'); //adds winning animation style classes to elements
    bgColour_Body.classList.add('greenBG')
    setTimeout(() => userChoice_Div.classList.remove('greenGlow'), 300);    //removes the elements making a SICK animation
    setTimeout(() => bgColour_Body.classList.remove('greenBG'), 300);
}
function lose(p,cpu){       //same as above, but for a loss
    const userChoice_Div = document.getElementById(p);
    CPUScore++;
    userScore_Span.innerHTML = userScore;
    CPUScore_Span.innerHTML = CPUScore;
    result_h1.innerHTML = wordConvert(cpu) + " beats " + wordConvert(p) + ". u frickin suck.";
    userChoice_Div.classList.add('redGlow');
    bgColour_Body.classList.add('redBG');
    setTimeout(() => userChoice_Div.classList.remove('redGlow'), 300);
    setTimeout(() => bgColour_Body.classList.remove('redBG'), 300);
    
}
function tie(p){            //same as above but for a tie
    result_h1.innerHTML = "Draw :0"
    const userChoice_Div = document.getElementById(p);
    userChoice_Div.classList.add('greyGlow');
    bgColour_Body.classList.add('greyBG');
    setTimeout(() => userChoice_Div.classList.remove('greyGlow'), 300);
    setTimeout(() => bgColour_Body.classList.remove('greyBG'), 300);
}
function game(userChoice){          //switch statement for all 9 possiblities
    const ComputerChoice = CPUChoice();
    //console.log(userChoice+ComputerChoice);
    switch (userChoice + ComputerChoice){
        case 'rs':
        case 'pr':
        case 'sp':
                win(userChoice,ComputerChoice);
            break;
        case 'rp':
        case 'ps':
        case 'sr':
                lose(userChoice, ComputerChoice);
            break;
        case 'rr':
        case 'pp':
        case 'ss':
                tie(userChoice);
            break;
    }
}

//adds event listeners to the buttons, which if clicked, executes game function with
//the button pressed
function main(){
    rock_Div.addEventListener('click', () => game("r"))
    paper_Div.addEventListener('click', () => game("p"))
    scissor_Div.addEventListener('click', () => game("s"))
}
main(); //adds the event listeners/ makes game functional