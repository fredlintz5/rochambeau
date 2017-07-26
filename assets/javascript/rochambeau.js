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

	


	//"Listen" for Rock button pressed?
	document.getElementById("rock").addEventListener("click", function() {

		//create random nuber to choose random computer image, display that image
		//in corresponding html ID
	    var randomNumber = Math.floor((Math.random() * compArray.length));
		document.getElementById("player").innerHTML = rock;
		document.getElementById("computer").innerHTML = compArray[randomNumber];

			//else if logic to determine who won and lost each hand
			if (randomNumber === 0) {
				console.log("Tie")
			}

			else if (randomNumber === 1) {
				compScore++
				document.getElementById("compScore").innerHTML = compScore;
			}

			else {
				humanScore++
				document.getElementById("humanScore").innerHTML = humanScore;
			}

	});	

	//"Listen" for paper button pressed?
	document.getElementById("paper").addEventListener("click", function() {

		//create random nuber to choose random computer image, display that image
		//in corresponding html ID
	    var randomNumber = Math.floor((Math.random() * compArray.length));
		document.getElementById("player").innerHTML = paper;
		document.getElementById("computer").innerHTML = compArray[randomNumber];

			//else if logic to determine who won and lost each hand
			if (randomNumber === 1) {
				console.log("Tie")
			}

			else if (randomNumber === 2) {
				compScore++
				document.getElementById("compScore").innerHTML = compScore;
			}

			else {
				humanScore++
				document.getElementById("humanScore").innerHTML = humanScore;
			}

	});

	//"Listen" for scissor button pressed?
	document.getElementById("scissor").addEventListener("click", function() {

		//create random nuber to choose random computer image, display that image
		//in corresponding html ID
	    var randomNumber = Math.floor((Math.random() * compArray.length));
		document.getElementById("player").innerHTML = scissor;
		document.getElementById("computer").innerHTML = compArray[randomNumber];

			//else if logic to determine who won and lost each hand
			if (randomNumber === 2) {
				console.log("Tie")
			}

			else if (randomNumber === 0) {
				compScore++
				document.getElementById("compScore").innerHTML = compScore;
			}

			else {
				humanScore++
				document.getElementById("humanScore").innerHTML = humanScore;
			}

	});

	
	// function checkScores() {

	// 		if (compScore === 10) {
	// 			alert("You Lost!")
	// 			window.location.href='index.html';

	// 		} else if (humanScore === 10) {
	// 			alert("You WON!")
	// 			window.location.href='index.html';
	// 		}
	// 	};

	













