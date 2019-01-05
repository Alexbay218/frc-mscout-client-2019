var dataProtocolClass = {
	qrcsObj: {},
	qrObj: {},
	dispElement: {},
	eventVars: [],
	eventLogs: [],
	metadata: {},
	processedString: "",
	isShowing: false,
	hasDisplayed: false,
	timeInt: 250,
	initFunct: function() {
		this.isShowing = true;
		this.hasDisplayed = true;
		this.dispElement = document.getElementById("display");
		this.dispElement.innerHTML = "";
		this.dispElement.insertAdjacentHTML("beforeend", "<div id=\"qrdisplay\"></div>");
		var tmp = document.getElementById("qrdisplay");
		var lowest = tmp.offsetWidth < tmp.offsetHeight ? tmp.offsetWidth : tmp.offsetHeight;
		tmp.insertAdjacentHTML("beforeend", "<div id=\"qrspacer\"></div>");
		var tmp = document.getElementById("qrspacer");
		tmp.style.height = (lowest*0.1) + "px";
		this.qrObj = new QRCode("qrdisplay", {
			width: lowest*0.9,
			height: lowest*0.9,
			correctLevel: QRCode.CorrectLevel.L
		});
		this.qrcsObj = Object.assign({}, qrcodestreamerClass);
		this.qrcsObj.initFunct(this.qrObj, ADLER32);
		this.dispElement.insertAdjacentHTML("beforeend", "<input type=\"range\" min=\"100\" max=\"1000\" value=\"500\" id=\"qrslider\">");
		var slider = document.getElementById("qrslider");
		slider.value = this.timeInt;
		this.dispElement.insertAdjacentHTML("beforeend", "<button id=\"qrbutton\">Back</button>");
		var backButton = document.getElementById("qrbutton");
		backButton.onmouseup = () => {
			this.backFunct();
		}
		this.processFunct();
	},
	inputFunct: function(inMetadata, inEventVars, inEventLog) {
		this.metadata = inMetadata;
		this.eventVars = inEventVars;
		this.eventLog = inEventLog;
	},
	processFunct: function() {
		this.processedString = "";
		this.processedString += this.metadata.sourceTeamNumber + ";" + this.metadata.targetTeamNumber + ";";
		this.processedString += this.metadata.dateNumber + ";" + this.metadata.matchType + ";";
		this.processedString += this.metadata.matchNumber + ";:";
		for(var i = 0;i < this.eventVars.length;i++) {
			this.processedString += this.eventVars[i].variableName + "," + this.eventVars[i].variableAmount + ";";
		}
		this.processedString += ":";
		for(var i = 0;i < this.eventLog.length;i++) {
			this.processedString += this.eventLog[i].eventKey + "," + this.eventLog[i].time + ";";
		}
		this.qrcsObj.inputData(this.processedString);
	},
	displayFunct: function() {
		if(this.isShowing) {
			this.qrcsObj.nextCode();
			this.timeInt = Number.parseInt(document.getElementById("qrslider").value);
			window.setTimeout(() => {
				if(this.isShowing) {
					this.displayFunct();
				}
			}, this.timeInt);
		}
	},
	backFunct: function() {}
}
