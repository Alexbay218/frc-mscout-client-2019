var layoutClass = {
  dispElement:{},
  eventObj:{},
  initLayoutObj: {},
  dataProtocolObj: {},
  initFunct: function(events) {
    this.dispElement = document.getElementById("display");
    this.dispElement.style.width = window.innerWidth;
    this.dispElement.style.height = window.innerHeight;
	
    this.eventObj = events;
	this.dataProtocolObj = Object.assign({}, dataProtocolClass);
	this.initLayoutObj = Object.assign({}, initLayoutClass);
	
	this.initLayoutObj.contFunct = () => {
		this.layoutFunct();
		this.eventObj.assignEventListeners();
	};
	this.initLayoutObj.backFunct = () => {
		if(this.dataProtocolObj.hasDisplayed) {
			this.dataProtocolObj.initFunct();
			this.dataProtocolObj.displayFunct();
		}
	};
	
	this.dataProtocolObj.backFunct = () => {
		this.resetFunct();
	}
	
	this.initLayoutObj.initFunct();
  },
  resetFunct: function() {
	this.dataProtocolObj.isShowing = false;
	this.eventObj.resetTimeFunct();
	this.initLayoutObj.initFunct();
  },
  layoutFunct: function() {
	this.dispElement.innerHTML = "";
    var groupSum =  this.eventObj.eventJson.variableHeightWeight;
    //Variables
    this.dispElement.insertAdjacentHTML("beforeend", "<div class=\"group\" id=\"variables\"></div>");
    var tmp = document.getElementById("variables");
    tmp.insertAdjacentHTML("beforeend","<div class=\"variable\" id=\"time\"></div>");
    var tmp2 = document.getElementById("time");
    tmp2.style.height = "100%";
    tmp2.style.width = ((1/(this.eventObj.eventJson.variables.length+1))*100).toString() + "%";
    for(var i = 0;i < this.eventObj.eventJson.variables.length;i++) {
      tmp.insertAdjacentHTML("beforeend","<div class=\"variable\" id=\"" + this.eventObj.eventJson.variables[i].variableName + "\"></div>");
      tmp2 = document.getElementById(this.eventObj.eventJson.variables[i].variableName);
      tmp2.style.height = "100%";
      tmp2.style.width = ((1/(this.eventObj.eventJson.variables.length+1))*100).toString() + "%";
    }
    //Groups
    for(var i = 0;i < this.eventObj.eventJson.layouts.length;i++) {
      var hasCurr = false;
      for(var j = 0;j < i;j++) {
        if(this.eventObj.eventJson.layouts[i].groupName == this.eventObj.eventJson.layouts[j].groupName) {
          hasCurr = true;
        }
      }
      if(!hasCurr) {
        this.dispElement.insertAdjacentHTML("beforeend", "<div class=\"group\" id=\"" + this.eventObj.eventJson.layouts[i].groupName + "\"></div>");
        groupSum += this.eventObj.eventJson.layouts[i].heightWeight;
      }
    }
    //Input
    tmp = document.getElementById("variables");
    tmp.style.width = "100%";
    tmp.style.height = ((this.eventObj.eventJson.variableHeightWeight/groupSum)*100).toString() + "%";
    for(var i = 0;i < this.eventObj.eventJson.layouts.length;i++) {
      tmp = document.getElementById(this.eventObj.eventJson.layouts[i].groupName);
      tmp.style.width = "100%";
      tmp.style.height = ((this.eventObj.eventJson.layouts[i].heightWeight/groupSum)*100).toString() + "%";
      tmp.insertAdjacentHTML("beforeend", "<div class=\"input\" id=\"" + this.eventObj.eventJson.layouts[i].eventName + "\"></div>");
    }
    for(var i = 0;i < this.eventObj.eventJson.layouts.length;i++) {
      groupSum = 0;
      for(var j = 0;j < this.eventObj.eventJson.layouts.length;j++) {
        if(this.eventObj.eventJson.layouts[i].groupName == this.eventObj.eventJson.layouts[j].groupName) {
          groupSum += this.eventObj.eventJson.layouts[j].widthWeight;
        }
      }
      tmp = document.getElementById(this.eventObj.eventJson.layouts[i].eventName);
      tmp.style.height = "100%";
      tmp.style.width = ((this.eventObj.eventJson.layouts[i].widthWeight/groupSum)*100).toString() + "%";
    }
    this.updateFunct();
  },
  updateFunct: function() {
    if(this.eventObj.isGoing) {
      this.eventObj.updateTimeFunct();
    }
    //Variables
    var tmp = document.getElementById("time");
	if(tmp != null) {
		tmp.innerText = "Time: " + this.eventObj.timeDelta.toFixed(2);
		for(var i = 0;i < this.eventObj.eventJson.variables.length;i++) {
		  tmp = document.getElementById(this.eventObj.eventJson.variables[i].variableName);
		  tmp.innerText = this.eventObj.eventJson.variables[i].variableTitle + ": " + this.eventObj.eventJson.variables[i].variableAmount;
		}
		//input
		for(var i = 0;i < this.eventObj.eventJson.events.length;i++) {
		  tmp = document.getElementById(this.eventObj.eventJson.events[i].eventName);
		  tmp.innerText = this.eventObj.eventJson.events[i].eventTitle;
		}
	}
	//Pass data to qrcode
	if(this.eventObj.timeDelta >= 3) {
		this.dataProtocolObj.inputFunct(Object.assign({}, this.initLayoutObj.metadataObj), this.eventObj.initEventVars.slice(), this.eventObj.eventLog.slice());
		this.dataProtocolObj.initFunct();
		this.dataProtocolObj.displayFunct();
		this.eventObj.resetTimeFunct();
	}
  }
}
