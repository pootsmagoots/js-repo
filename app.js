/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his MAIN score. After that, it's the next player's turn
- The first player to reach 100 points on MAIN score wins the game

*/

var scores, roundScore, activePlayer, name1, name2;

scores = [0,0];
roundScore = 0;
activePlayer = 0;



document.querySelector(".dice").style.display = 'none'; /*example of style.display css */


// function  btn() { // this is a expression function and could be called back
//   //do something here
// }
// btn();

document.getElementById('score-0').textContent = '0';  /*another way to target ID in the DOM */
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';




document.querySelector('.btn-roll').addEventListener('click', function() { /*start of function */


 /*  Random Number */
var dice = Math.floor(Math.random() * 6) + 1;

/* display result */
var diceDom = document.querySelector('.dice');
diceDom.style.display = 'block';
diceDom.src = 'dice-' + dice + '.png'

/*update score IF user does not roll a 1 */
if (dice !== 1) {
  // Add score
  roundScore += dice;
  document.querySelector('#current-' + activePlayer).textContent = roundScore;  /*selects element and gets text*/
} else {
  // next player
  nextPlayer();


  //  document.querySelector('.player-0-panel').classList.remove("active");
  // document.querySelector('.player-1-panel').classList.add("active");

}

});



document.querySelector('.btn-hold').addEventListener('click', function(){
   // Add current score  to global score
     scores[activePlayer] += roundScore
   //update the UI
 document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

   //check if player won the game

   if (scores[activePlayer] >= 100) {
     document.querySelector('#name-' + activePlayer).textContent = 'Winner!!';
     document.querySelector('.dice').style.display = 'none';
     document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
     document.querySelector('.player-' + activePlayer + '-panel').classList.remove('winner');
   } else {
     nextPlayer();
   }
  // if (scores[activePlayer] === 100) {
  //   alert(activePlayer + " you have won the game")
  // } else if (scores[activePlayer] > 100) {
  //   activePlayer[scores] += 0;
  //   alert(activePlayer + " sorry, your score is over 100 you will restart to 0")
  // }
   //nextPlayer
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





// dice = Math.floor(Math.random() * 6) + 1; global scope



// document.querySelector('#current-' + activePlayer).innerHTML = '<strong><em>' + dice + '</strong></em>'; /*this is a setter it sets the value */


// var x = document.querySelector('#score-0').textContent; /*another example of a getter */
// console.log(x);
