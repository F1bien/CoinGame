
var InGame = false;
var turn;

function Game() {

	if (InGame == true) {
		return;
	}

	InGame = true;
	// document.getElementsByClassName("moneta").style.visibility = "visible";
	//document.querySelector(".moneta").style.visibility = "visible";


	const element_coin_blue = document.getElementById("moneta-blue");
	const element_coin_red = document.getElementById("moneta-red");


	const CSS_root = document.querySelector(':root');

	//CSS_root.style.setProperty("--turn-color", "blue");

	const element_arrow_up = document.getElementById("arrow-up");
	const element_arrow_left = document.getElementById("arrow-left");
	const element_arrow_right = document.getElementById("arrow-right");
	const element_arrow_down = document.getElementById("arrow-down");

	turn = Math.random() < 0.5;
	var Distance;


	if (turn == true) { // blue
		CSS_root.style.setProperty("--turn-color", "blue");
	}

	if (turn == false) { // red
		CSS_root.style.setProperty("--turn-color", "red");

	}

	element_coin_blue.style.top = Math.floor(Math.random() * 350) + "px";
	element_coin_blue.style.left = Math.floor(Math.random() * 350) + "px";
	element_coin_blue.style.visibility = "visible";

	element_coin_red.style.top = Math.floor(Math.random() * (300 -50 + 1)) -50 + "px";
	element_coin_red.style.left = Math.floor(Math.random() * 350) + "px";
	element_coin_red.style.visibility = "visible";

	console.log(Distance_());

/*	while ( !(Distance < 10) ) {
		

		if ( turn == true )  {
			CSS_root.style.setProperty("--turn-color", "blue");

		}

		Distance = Distance_();
	}
*/

	function Move_Up () {
		if ( turn == true ) {
			var element = element_coin_blue;
		
			var x = Random_();

			if ( x + element.style.top > 0 ) {
				element_coin_blue.style.top = 0 + "px";
			}
			else {
				element_coin_blue.style.top = element_coin_blue.style.top + x + "px";
			}
		
		}

		if ( turn == false ) {
			var element = element_coin_red;
		
			var x = Random_();

			if ( x + element.style.top > -50 ) {
				element_coin_red.style.top = -50 + "px";
			}
			else {
				element_coin_red.style.top = element_coin_red.style.top + x + "px";
			}
		
		}


	}
	function Move_Left () {}
	function Move_Right () {}
	function Move_Down () {}




	function Distance_ () {



		var elemnt_1 = element_coin_blue.getBoundingClientRect();
		var elemnt_2 = element_coin_red.getBoundingClientRect();
	  
		var x1 = elemnt_1.left + elemnt_1.width / 2;
		var y1 = elemnt_1.top + elemnt_1.height / 2;
		var x2 = elemnt_2.left + elemnt_2.width / 2;
		var y2 = elemnt_2.top + elemnt_2.height / 2;
	  		
		return Math.floor(Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)));
	}

	function Random_() {
		return Math.floor(Math.random() * 50);
	}



}

function Move_Up () {

	const element_coin_blue = document.getElementById("moneta-blue");
	const element_coin_red = document.getElementById("moneta-red");

	var x = Math.floor(Math.random() * 50);

	if ( turn == true ) {
		var element = element_coin_blue;
	
		

		if ( x + element.style.top > 0 ) {
			element_coin_blue.style.top = 0 + "px";
		}
		else {
			element_coin_blue.style.top = element_coin_blue.style.top + x + "px";
		}
	
	}

	if ( turn == false ) {
		var element = element_coin_red;
	

		if ( x + element.style.top > -50 ) {
			element_coin_red.style.top = -50 + "px";
		}
		else {
			element_coin_red.style.top = element_coin_red.style.top + x + "px";
		}
	
	}


}
function Move_Left () {}
function Move_Right () {}
function Move_Down () {}
