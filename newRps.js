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
var p1 = { name: 'Brandon'};
var p2 = { name: 'Ashley'};

function playRound(player1, player2) {
  var rn = getHand(); //p1's random throw
  var rn2 = getHand2(); //p2's random throw

  if (rn === rn2) {
    console.log(`${p1.name} played: ${rn} and ${p2.name} played: ${rn2}`);
    console.log("It's a tie!");
  }
  else if ((rn === 'rock' && rn2 === 'scissors') ||
    (rn === 'scissors' && rn2 === 'paper') ||
    (rn === 'paper' && rn2 === 'rock')) {
    console.log(`${p1.name} played: ${rn} and ${p2.name} played: ${rn2}`);
    console.log(`${p1.name} won`);
  }
  else {
    console.log(`${p1.name} played: ${rn} and ${p2.name} played: ${rn2}`);
    console.log(`${p2.name} won`);  
  }
}

function playGame(player1, player2, playUntil) {
  var scoreP1 = 0;
  var scoreP2 = 0;
  var rn = getHand(); //p1's random throw
  var rn2 = getHand2(); //p2's random throw

  while ((scoreP1 < playUntil) && (scoreP2 < playUntil)) {
    if (rn === rn2) {
    console.log(`${p1.name} played: ${rn} and ${p2.name} played: ${rn2}`);
    console.log("It's a tie!");
    }
    else if ((rn === 'rock' && rn2 === 'scissors') ||
    (rn === 'scissors' && rn2 === 'paper') ||
    (rn === 'paper' && rn2 === 'rock')) {
    console.log(`${p1.name} played: ${rn} and ${p2.name} played: ${rn2}`);
    console.log(`${p1.name} won`);
    console.log(`${p1.name} scored a point!`);
    scoreP1++;
    }
    else {
      console.log(`${p1.name} played: ${rn} and ${p2.name} played: ${rn2}`);
      console.log(`${p2.name} won`);       
      console.log(`${p2.name} scored a point!`);
      scoreP2++;
    }
  }
  if (scoreP1 === playUntil) {
    console.log(`${p1.name} won the game`);
  } 
  else {
    console.log(`${p2.name} won the game`);
  }

}
