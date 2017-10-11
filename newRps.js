var hands = ['rock', 'paper', 'scissors'];
var raN = Math.floor(Math.random()*3);
var raN2 = Math.floor(Math.random()*3);

// vv should return a random value of rock, paper, or scissors
function getHand(hands, raN) {
	return hands[raN];
}
function getHand2(hands, raN) {
	return hands[raN2];
}

// vv two players
var p1 = {name: 'Brandon', throw: getHand(hands, raN)};
var p2 = {name: 'Ashley', throw: getHand2(hands, raN2)};

// console.log(p1.throw)
// console.log(p2.throw)

function playRound(player1, player2) {
	if (player1.throw === player2.throw) {
			console.log(`${player1.name} played: ${player1.throw} and ${player2.name} played: ${player2.throw}`);
			console.log("It's a tie!");
		}
		else if ((player1.throw === "rock" && player2.throw === "scissors" ) ||
			(player1.throw === "scissors" && player2.throw === "paper" ) ||
		(player1.throw === "paper" && player2.throw === "rock" )) {
			console.log(`${player1.name} played: ${player1.throw} and ${player2.name} played: ${player2.throw}`);
			console.log(`${player1.name} won`);
		}
		else {
			console.log(`${player1.name} played: ${player1.throw} and ${player2.name} played: ${player2.throw}`);
			console.log(`${player2.name} won`);
		}		
}

function playGame(player1, player2, playUntil) {
	var scoreP1 = 0;
	var scoreP2 = 0;
	//var playUntil = 0;

	while (score1 < playUntil || score2 < playUntil)
	if (player1 === player2) {
			console.log(`Player 1 played: ${player1} and Player 2 played ${player2}`);
			
		}
		else if ((player1 === "rock" && player2 === "scissors" ) ||
			(player1 === "scissors" && player2 === "paper" ) ||
		(player1 === "paper" && player2 === "rock" )) {
			scoreP1++;
		}
		else {
			//player 2 wins
			scoreP2++;
		}
}
