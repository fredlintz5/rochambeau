	//global variables
	var inverseRock = "<img src='assets/images/inverseRock.png' height='125'>";
	var inversePaper = "<img src='assets/images/inversePaper.png' height='125'>";
	var inverseScissor = "<img src='assets/images/inverseScissor.png' height='125'>";
	var rock = "<img src='assets/images/rock.png' height='125'>";
	var paper = "<img src='assets/images/paper.png' height='125'>";
	var scissor = "<img src='assets/images/scissors.png' height='125'>";
	var compArray = [inverseRock, inversePaper, inverseScissor];
	var humanScore = 0;
	var compScore = 0;


setTimeout(function () {
	    alert("Try to beat the Machine, best out of 3 determines the fate of the world. Ties will not be recorded.");
	}, 700);

gamePlay("#paper", paper, 1, 2);
gamePlay("#rock", rock, 0, 1);
gamePlay("#scissor", scissor, 2, 0);


function gamePlay(divId, image, num1, num2) { 
	$(divId).click(function() {

		//create random nuber to choose random computer image, display that image
		//in corresponding html ID
	    var randomNumber = Math.floor((Math.random() * compArray.length));
		$("#player").html(image);
		$("#computer").html(compArray[randomNumber]);

			//else if logic to determine who won and lost each hand
			if (randomNumber === num1) {
				console.log("Tie")
			}

			else if (randomNumber === num2) {
				compScore++
				$("#compScore").html(compScore);
			}

			else {
				humanScore++
				$("#humanScore").html(humanScore);
			}
		
		//delay checkScore so images can load, and score can update before alerting outcome	
		setTimeout(function () {
			checkScores();			
		}, 500);

	});

};
	

function checkScores() {

	if (compScore === 3) {
		alert("You Lost! May God have mercy on our souls... Refresh Page for New Game")

	} else if (humanScore === 3) {
		alert("You WON! Thank you Chuck Norris! Refresh Page for New Game")
	}
};

	













