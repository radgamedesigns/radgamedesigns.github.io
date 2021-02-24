var bgcolor = "black";

function FinishWebLoad(arg) {
	document.getElementById("loadLogo").style.display = "none";
	gameInstance.SendMessage('SquareRoundedCorners', 'WebSetBkg', bgcolor);
}

function BkgBlack() {
	bgcolor = "black";
    document.body.style.backgroundColor = bgcolor;
 	gameInstance.SendMessage('SquareRoundedCorners', 'WebSetBkg', bgcolor);
}

function BkgWhite() {
	bgcolor = "white";
    document.body.style.backgroundColor = bgcolor;
    gameInstance.SendMessage('SquareRoundedCorners', 'WebSetBkg', bgcolor);
}