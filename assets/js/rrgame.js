var bgcolor = "black";
  
function FinishWebLoad(arg) {
	document.getElementById("loadLogo").style.display = "none";
	gameInstance.SendMessage('SquareRoundedCorners', 'WebSetBkg', bgcolor);
}

function ConversionLead(arg, origin) {
  var dataObject = {
    'event': 'conversion_lead',
    'category': arg,
    'label': origin
  };
  if(typeof dataLayer != 'undefined'){
    dataLayer.push(dataObject);
  }
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

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
      vars[key] = value;
    });
    return vars;
}

function getUrlParam(parameter, defaultvalue){
    var urlparameter = defaultvalue;
    if(window.location.href.indexOf(parameter) > -1){
      urlparameter = getUrlVars()[parameter];
    }
    return urlparameter;
}