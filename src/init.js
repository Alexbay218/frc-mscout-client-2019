var initLayoutClass = {
	metadataObj: {},
	dispElement: {},
	initFunct: function() {
		this.metadataObj = {
			targetTeamNumber: 0,
			sourceTeamNumber: 0,
			dateNumber: 0,
			matchType: "Test",
			matchNumber: 0
		};
		this.dispElement = document.getElementById("display");
		this.dispElement.innerHTML = "";
		this.dispElement.insertAdjacentHTML("beforeend", "<input class=\"form\" id=\"sourceTeamNumber\" placeholder=\"Your Team Number\">");
		this.dispElement.insertAdjacentHTML("beforeend", "<input class=\"form\" id=\"targetTeamNumber\" placeholder=\"Robot Team Number\">");
		this.dispElement.insertAdjacentHTML("beforeend", 
			"<select class=\"form\" id=\"matchType\">" +
				"<option value=\"T\">Test</option>" +
				"<option value=\"PF\">Practice Field</option>" +
				"<option value=\"PM\">Practice Match</option>" +
				"<option value=\"Q\">Qualification</option>" +
				"<option value=\"QF\">Quarterfinal</option>" +
				"<option value=\"SF\">Semifinal</option>" +
				"<option value=\"F\">Final</option>" +
			"</select>"
		);
		this.dispElement.insertAdjacentHTML("beforeend", "<input class=\"form\" id=\"matchNumber\" placeholder=\"Match Number\">");
		this.dispElement.insertAdjacentHTML("beforeend", "<button class=\"form\" id=\"startButton\">Start</button>");
		this.dispElement.insertAdjacentHTML("beforeend", "<button class=\"form\" id=\"backButton\">Back</button>");
		
		var startButton = document.getElementById("startButton");
		startButton.onmouseup = () => {
			this.assignFunct();
			if(this.checkFunct()) {
				this.contFunct();
			}
		};
		
		var backButton = document.getElementById("backButton");
		backButton.onmouseup = () => {
			this.backFunct();
		};
	},
	assignFunct: function() {
		var tmp = document.getElementById("sourceTeamNumber");
		this.metadataObj.sourceTeamNumber = Number.parseInt(tmp.value);
		tmp = document.getElementById("targetTeamNumber");
		this.metadataObj.targetTeamNumber = Number.parseInt(tmp.value);
		this.metadataObj.dateNumber = Date.now();
		tmp = document.getElementById("matchType");
		this.metadataObj.matchType = tmp.value;
		tmp = document.getElementById("matchNumber");
		this.metadataObj.matchNumber = Number.parseInt(tmp.value);
	},
	checkFunct: function() {
		if(Number.isNaN(this.metadataObj.sourceTeamNumber)) {
			return false;
		}
		if(Number.isNaN(this.metadataObj.targetTeamNumber)) {
			return false;
		}
		if(Number.isNaN(this.metadataObj.matchNumber)) {
			return false;
		}
		return true;
	},
	contFunct: function() {},
	backFunct: function() {}
}