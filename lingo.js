//XTRA

var attributesArray=[
	"id",
	"onclick",
	"class"
];

//XTRA



//VARS

	var usernameVar
	var timeSeconds
	var timerHeight=100;

//VARS



//ALL ELEMENTS

	var lingoContainer=document.getElementById("lingo-container");
	var startBtn=document.getElementById("startBtn");
	var uitlegBtn=document.getElementById("uitlegBtn");
	var usernameBtn=document.getElementById("usernameBtn");

	var modal=document.createElement("div");
	var modalText=document.createElement("p");
	var backB=document.createElement("button");
	var usernameInput=document.createElement("input");
	var usernameCreate=document.createElement("button");
	var usernameStartDis=document.createElement("p");
	var chooseTime=document.createElement("p");
	var option30s=document.createElement("button");
	var option60s=document.createElement("button");
	var option90s=document.createElement("button");
	var timer=document.createElement("div");
	var timerBalk=document.createElement("div");
	var secondsLeft=document.createElement("p");
	var lingoBox=document.createElement("div");
	var startTimerBtn=document.createElement("button");
	var shield=document.createElement("div");
	var usernameP=document.createElement("p");

	for (a=1;a<6;a++) {
		for (i=1;i<6;i++) {
			var letter=document.createElement("div");
			letter.setAttribute("id", a+"letter"+i);
			lingoBox.appendChild(letter);
		}
	}

//ALL ELEMENTS



//TEXTNODES

	var naamFout=document.createTextNode("Dit is niet een geldige username.")
	var uitlegText=document.createTextNode("In Lingo krijg je 5 kansen om een woord te raden binnen een tijd. Als dat lukt heb je gewonnen, zoniet dan heb je verloren.");
	var backText=document.createTextNode("Terug");
	var userCreatext=document.createTextNode("Maak aan");
	var confirm=document.createTextNode("weet je zeker dat je wilt beginnnen?")
	var chooseTimeText=document.createTextNode("Kies hoeveel tijd in seconden je wilt om een woord te raden.");
	var startTimerBtnText=document.createTextNode("Start");
	var gameOverText=document.createTextNode("Helaas, de tijd is om. Probeer opnieuw!");
	var timerUitlegText=document.createTextNode("Zodra je op de start knop drukt, gaat de timer af");
	var usernamePText=document.createTextNode(usernameVar);

	var option30sText=30;
	var	option60sText=60;
	var option90sText=90;

//TEXTNODES



//ATTRIBUTES

	modal.setAttribute("id", "modal");
	modal.setAttribute("class", "block");

	backB.setAttribute("id", "backB");
	backB.setAttribute("class", "block");
	backB.setAttribute("onclick", "modalStyle('none')");

	modalText.setAttribute("id", "modalText");
	modalText.setAttribute("class", "block");

	usernameInput.setAttribute("id", "usernameInput");
	usernameInput.setAttribute("class", "usernameInputHide");
	usernameInput.setAttribute("value", "Enter username");
	usernameInput.setAttribute("onclick", "usernameInput.value=null; usernameInput.style.fontSize='30px'");

	usernameCreate.setAttribute("id", "usernameCreate");
	usernameCreate.setAttribute("class", "usernameInputHide");
	usernameCreate.setAttribute("onclick", "createUsername()");

	usernameStartDis.setAttribute("id", "usernameStartDis");
	usernameStartDis.setAttribute("class", "hide");

	chooseTime.setAttribute("id", "chooseTime");
	chooseTime.setAttribute("class", "hide");

	option30s.setAttribute("id", "option30s");
	option30s.setAttribute("class", "hide");
	option30s.setAttribute("onclick", "sendTime(option30sText, startLingo(30))");

	option60s.setAttribute("id", "option60s");
	option60s.setAttribute("class", "hide");
	option60s.setAttribute("onclick", "sendTime(option60sText, startLingo(60))");

	option90s.setAttribute("id", "option90s");
	option90s.setAttribute("class", "hide");
	option90s.setAttribute("onclick", "sendTime(option90sText, startLingo(90))");

	timer.setAttribute("id", "timer");
	timer.setAttribute("class", "hide");

	timerBalk.setAttribute("id", "timerBalk");

	secondsLeft.setAttribute("id", "secondsLeft");
	secondsLeft.setAttribute("class", "hide");

	lingoBox.setAttribute("id", "lingoBox");
	lingoBox.setAttribute("class", "hide");

	startTimerBtn.setAttribute("id", "startTimerBtn");
	startTimerBtn.setAttribute("class", "hide");
	startTimerBtn.setAttribute("onclick", "startTimer()");

	shield.setAttribute("id", "shield");
	shield.setAttribute("class", "hide");

	usernameP.setAttribute("id", "usernameP");
	usernameP.setAttribute("class", "hide");

//ATTRIBUTES



//APPENDING

	lingoContainer.appendChild(modal);
	lingoContainer.appendChild(usernameInput);
	lingoContainer.appendChild(usernameCreate);
	lingoContainer.appendChild(usernameStartDis);
	lingoContainer.appendChild(chooseTime);
	lingoContainer.appendChild(option30s);
	lingoContainer.appendChild(option60s);
	lingoContainer.appendChild(option90s);
	lingoContainer.appendChild(secondsLeft);
	lingoContainer.appendChild(timer);
	lingoContainer.appendChild(lingoBox);
	lingoContainer.appendChild(startTimerBtn);
	lingoContainer.appendChild(shield);
	lingoContainer.appendChild(usernameP);

	modal.appendChild(modalText);
	backB.appendChild(backText);
	usernameCreate.appendChild(userCreatext);
	chooseTime.appendChild(chooseTimeText);
	timer.appendChild(timerBalk);
	startTimerBtn.appendChild(startTimerBtnText);

//APPENDING



//FUNCTIONS

	function modalStyle(display, text) {
		
		modal.style.display=display;
		modalText.innerHTML=text;
		modal.appendChild(backB);

	}

	function usernameDisplay() {

		if (usernameInput.className=="usernameInputHide") {

			usernameInput.className="usernameInputShow";
			usernameCreate.className="usernameInputShow";

		}

		else {

			usernameInput.className="usernameInputHide";
			usernameCreate.className="usernameInputHide";

		}
		
	}

	function createUsername() {

		if (usernameInput.value=="Enter username"||usernameInput.value=="") {

			modalStyle("block", naamFout.textContent);

		}

		else {

			usernameVar=usernameInput.value;
			usernameStartDis.innerHTML="succes "+usernameVar;

			usernameStartDis.className="block";
			usernameInput.className="hide";
			usernameCreate.className="hide";
			usernameBtn.className="hide";

			uitlegBtn.style.borderRadius="40px 10px 40px 10px";

		}
		

	}

	function removeStart(functionName) {
		
		startBtn.className="hide";
		uitlegBtn.className="hide";
		usernameBtn.className="hide";
		usernameInput.className="usernameInputHide";
		usernameCreate.className="usernameInputHide";
		usernameStartDis.className="hide";
		functionName

	}

	function chooseTimeFun() {
		
		chooseTime.className="block";
		option30s.className="block";
		option60s.className="block";
		option90s.className="block";

		option30s.innerHTML=option30sText;
		option60s.innerHTML=option60sText;
		option90s.innerHTML=option90sText;

	}

	function sendTime(time, functionName) {

		timeSeconds=time;
		functionName
	}

	function startTimer() {

		shield.className="hide";
		startTimerBtn.className="hide";

		setInterval(

			function() {
				timerHeight=timerHeight-0.10;
				timerBalk.style.height=timerHeight+'%';

				if (timerHeight<33) {
					timerBalk.style.backgroundColor="rgb(200,0,0)";
				}

				if (timerHeight<0) {
					clearInterval();
					timerBalk.className="hide";
					modalStyle("block", gameOverText.textContent);
				}
			}
		,
			timeSeconds)

	}

	function startLingo() {

		console.log(timeSeconds+" second game started");
		
		chooseTime.className="hide";
		option30s.className="hide";
		option60s.className="hide";
		option90s.className="hide";

		timer.className="block";
		secondsLeft.className="block";
		lingoBox.className="block";
		startTimerBtn.className="block";
		shield.className="block";
		usernameP.className="block";

		shield.innerHTML=timerUitlegText.textContent;
		secondsLeft.innerHTML=timeSeconds;
		usernameP.innerHTML=usernamePText.textContent;

	}

//FUNCTIONS