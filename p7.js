alert("is this working");

setClickHandler("clickRoll",rollDice);

var diceRoll = {
 	1: "&#x2680",
 	2: "&#x2681",
 	3: "&#x2682",
 	4: "&#x2683",
 	5: "&#x2684",
 	6: "&#x2685"
 };
 //setHTML("diceGoHere" , diceRoll[Math.floor(Math.random() * 6 ) + 1]);
 //setHTML("diceGoHere" , Math.floor(Math.random() * 6) + 1);

function rollDice(){
	var getValue = diceRoll[Math.floor(Math.random() * 6) + 1];
	setHTML("diceGoHere" , getValue);
 	
 
 //var die = 

}