
var InGame = false;


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


    var turn = Math.random() < 0.5;

    if (turn == true) { // blue
        CSS_root.style.setProperty("--turn-color", "blue");
    }

    if (turn == false) { // red
        CSS_root.style.setProperty("--turn-color", "red");

    }

    element_coin_blue.style.top = Random_ + "px";
    element_coin_blue.style.left = Random_ + "px";
    element_coin_blue.style.visibility = "visible";

    element_coin_red.style.top = Random_ + "px";
    element_coin_red.style.left = Random_ + "px";
    element_coin_red.style.visibility = "visible";









    function Random_() {
        return Number(Math.random() * 50);
    }



}


