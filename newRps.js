// vv should return a random value of rock, paper, or scissors
function getHand() {
  var hands = ['rock', 'paper', 'scissors'];
  var raN = Math.floor(Math.random() * 3);
  return hands[raN];
}
function getHand2() {
  var hands = ['rock', 'paper', 'scissors'];
  var raN = Math.floor(Math.random() * 3);
  return hands[raN];
}

// vv two players
var p1 = { name: 'Brandon', throw: getHand() };
var p2 = { name: 'Ashley', throw: getHand2() };

console.log(p1.throw);
console.log(p2.throw);

function playRound(player1, player2) {
  if (player1.throw === player2.throw) {
    console.log(
      `${player1.name} played: ${player1.throw} and ${player2.name} played: ${player2.throw}`
    );
    console.log("It's a tie!");
  } else if (
    (player1.throw === 'rock' && player2.throw === 'scissors') ||
    (player1.throw === 'scissors' && player2.throw === 'paper') ||
    (player1.throw === 'paper' && player2.throw === 'rock')
  ) {
    console.log(
      `${player1.name} played: ${player1.throw} and ${player2.name} played: ${player2.throw}`
    );
    console.log(`${player1.name} won`);
  } else {
    console.log(
      `${player1.name} played: ${player1.throw} and ${player2.name} played: ${player2.throw}`
    );
    console.log(`${player2.name} won`);
  }
}

function playGame(player1, player2, playUntil) {
  var scoreP1 = 0;
  var scoreP2 = 0;
  //var playUntil = 0;

  while (scoreP1 <= playUntil && scoreP2.throw <= playUntil) {
    if (player1.throw === player2) {
      console.log(
        `${player1.name} played: ${player1.throw} and ${player2.name} played ${player2.throw}...  So it was a tie.`
      );
    } else if (
      (player1.throw === 'rock' && player2.throw === 'scissors') ||
      (player1.throw === 'scissors' && player2.throw === 'paper') ||
      (player1.throw === 'paper' && player2.throw === 'rock')
    ) {
      // vv if player one wins.
      scoreP1++;
      console.log(`${player1.name} scored a point!`);
    } else {
      //player 2 wins
      scoreP2++;
      console.log(`${player2.name} scored a point!`);
    }
  }
}
