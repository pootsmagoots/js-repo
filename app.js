/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his MAIN score. After that, it's the next player's turn
- The first player to reach 100 points on MAIN score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying, gameScore;

init ();

var lastDice;

var gameScore =

// function  btn() { // this is a expression function and could be called back
//   //do something here
// }
// btn();

document.querySelector('.btn-roll').addEventListener('click', function() { /*start of function */
if (gamePlaying) {
  /*  Random Number */
 var dice = Math.floor(Math.random() * 6) + 1;


 /* display result */
 var diceDom = document.querySelector('.dice');
 diceDom.style.display = 'block';
 diceDom.src = 'dice-' + dice + '.png'

 /*update score IF user does not roll a 1 */
 if (dice === 6 && lastDice === 6) {
   //player loses score
   scores[activePlayer] = 0;
  document.querySelector('#score-' + activePlayer).textContent = '0';
  nextPlayer();
 } else if (dice !== 1) {
   // Add score
   roundScore += dice;
   document.querySelector('#current-' + activePlayer).textContent = roundScore;  /*selects element and gets text*/
 } else {
   // next player
   nextPlayer();
   //  document.querySelector('.player-0-panel').classList.remove("active");
   // document.querySelector('.player-1-panel').classList.add("active");

  }
   lastDice = dice;
 }
});



document.querySelector('.btn-hold').addEventListener('click', function(){

  if (gamePlaying) {
   // Add current score  to global score
     scores[activePlayer] += roundScore
   //update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
   //check if player won the game

   if (scores[activePlayer] >= gameScore ) {
     document.querySelector('#name-' + activePlayer).textContent = 'Winner!!';
     document.querySelector('.dice').style.display = 'none';
     document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
     document.querySelector('.player-' + activePlayer + '-panel').classList.remove('winner');
     gamePlaying = false;
   } else {
     //next player //
     nextPlayer();
   }

   var lastDice = dice;
 }
})


function nextPlayer () {
  //next player
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; /* ternary operator */

     roundScore = 0;
     document.getElementById('current-1').textContent = '0';
     document.getElementById('current-0').textContent = '0';

     document.querySelector('.player-0-panel').classList.toggle("active");
     document.querySelector('.player-1-panel').classList.toggle("active");

     document.querySelector('.dice').style.display = 'none';

}


document.querySelector('.btn-new').addEventListener('click', init); /*CALLS INIT FUNCTION */

document.querySelector(".dice").style.display = 'none'; /*example of style.display css */

function init () {
  scores = [0,0];
  activePlayer = 0;
  roundScore = 0;
  gamePlaying = true;
  gameScore = document.querySelector('#score').value;



  document.getElementById('score-0').textContent = '0';  /*another way to target ID in the DOM */
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
};



// dice = Math.floor(Math.random() * 6) + 1; global scope



// document.querySelector('#current-' + activePlayer).innerHTML = '<strong><em>' + dice + '</strong></em>'; /*this is a setter it sets the value */


// var x = document.querySelector('#score-0').textContent; /*another example of a getter */
// console.log(x);
