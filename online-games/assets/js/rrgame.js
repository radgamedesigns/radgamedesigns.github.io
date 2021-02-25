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

function ConversionLead(title, platform) {
  var dataObject = {
    'event': 'conversion_lead',
    'category': title,
    'label': platform
  };
  if(typeof dataLayer != 'undefined'){
    dataLayer.push(dataObject);
  }
}

function ConversionRegistration(title, platform) {
  var dataObject = {
    'event': 'conversion_registration',
    'category': title,
    'label': platform
  };
  if(typeof dataLayer != 'undefined'){
    dataLayer.push(dataObject);
  }
}

function CompletedTutorial(title, platform) {
  var dataObject = {
    'event': 'conversion_tutorial',
    'category': title,
    'label': platform
  };
  if(typeof dataLayer != 'undefined'){
    dataLayer.push(dataObject);
  }
}