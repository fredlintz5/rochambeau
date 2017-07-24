window.onload = function() {



	//if (rock button pressed) {display rock image and "vs"}
	(document.getElementById("rock").addEventListener("click", displayRock));

		function displayRock() {
			document.getElementById("player").innerHTML = "<img src='assets/images/rock.png' height='150'>";
		    document.getElementById("vs").innerHTML = "<h1>VS</h1>";
		}

	//if (paper button pressed) {display paper image and "vs"}
	(document.getElementById("paper").addEventListener("click", displayPaper));

		function displayPaper() {
			document.getElementById("player").innerHTML = "<img src='assets/images/paper.png' height='150'>";
		    document.getElementById("vs").innerHTML = "<h1>VS</h1>";
		}

	//if (scissor button pressed) {display scissor image and "vs"}
	(document.getElementById("scissor").addEventListener("click", displayScissor));

		function displayScissor() {
			document.getElementById("player").innerHTML = "<img src='assets/images/scissors.png' height='150'>";
		    document.getElementById("vs").innerHTML = "<h1>VS</h1>";
		}


}




