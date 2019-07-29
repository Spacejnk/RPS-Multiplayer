//alert('hello');

// create variables and target the text or classes
var userScore = 0;
var computerScore = 0;
var userScore_span = document.getElementById('user-score');
var userScore_span = document.getElementById('user-score');
var computerScore_span = document.getElementById('computer-score');
var scoreBoard_div = document.querySelector('.score-board');
var result_p = document.querySelector('.result > p');
var rock_div = document.getElementById('r');
var paper_div = document.getElementById('p');
var scissors_div = document.getElementById('s');

// use a random function for r, p, s
function getComputerChoice() {
    var choices = ['r', 'p', 's'];
    var randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
