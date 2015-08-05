
setClickHandler("clickRoll",rollDice);

var diceRoll = {
 	1: "&#x2680",
 	2: "&#x2681",
 	3: "&#x2682",
 	4: "&#x2683",
 	5: "&#x2684",
 	6: "&#x2685"
 };
 var Die = function () {
		this.value=0;	
	};
 Die.prototype.roll = function(){
 	this.value=Math.floor(Math.random() * 6) + 1;

 }
 Die.prototype.getValue = function(){
 	return this.value;
 }
 Die.prototype.getHTML = function() {
 	return diceRoll[this.value];
 }
 
function rollDice(){
	var diceNum = (getInput("diceInput"));
	var total = 0;
	var text = " ";
	if (isNaN(diceNum)){
		alert("That is not a number");
	}
	else if (diceNum > 20){
		alert("Please choose a number between 0 and 20");
	}
	else if (diceNum < 0){
		alert("Please choose a number between 0 and 20");
	}
	else {

    var diceArray = [];
    for (i=0; i<diceNum; i++){
    	diceArray.push(new Die());


	}
	for (i=0;i<diceNum; i++){
		diceArray[i].roll();


	}
	for (i=0;i<diceNum;i++){
		total += diceArray[i].getValue();


	}
	for (i=0;i<diceNum;i++){
		text += diceArray[i].getHTML();

	}


	setHTML("Total" , total);
	setHTML("diceGoHere",text);

	}
}

	



		

	

