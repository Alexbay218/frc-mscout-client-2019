var eventsClass = {
  eventJson:{},
  eventVars:[],
  initEventVars:[],
  eventLog:[],
  timeStart:0,
  timeDelta:0,
  isGoing: false,
  initFunct: function(eventJsonStr) {
    this.eventJson = JSON.parse(eventJsonStr);
    for(var i = 0;i < this.eventJson.variables.length;i++) {
      this.eventVars.push(this.eventJson.variables[i]);
    }
  },
  startTimeFunct: function() {
	this.initEventVars = this.eventVars;
	this.eventLog = [];
    this.timeStart = Date.now();
    this.isGoing = true;
  },
  updateTimeFunct: function()  {
    this.timeDelta = (Date.now() - this.timeStart)/1000;
    return this.timeDelta;
  },
  resetTimeFunct: function() {
    this.timeDelta = 0;
    this.timeStart = Date.now();
    this.isGoing = false;
    this.eventLog = [];
  },
  triggerEventFunct: function(eventName) {
    var delta = 0;
    var key = "";
	var hasPushed = false;
	var hasLink = false;
    for(var i = 0;i < this.eventJson.events.length;i++) {
      if(this.eventJson.events[i].eventName == eventName) {
		for(var j = 0;j < this.eventJson.events[i].variableLink.length;j++) {
          if(this.eventJson.events[i].variableLink[j].var == variableName) {
			key = this.eventJson.events[i].eventKey;
            delta = this.eventJson.events[i].variableLink[j].amt;
			
          }
        }
      }
    }
    for(var k = 0;k < this.eventVars.length;k++) {
      if(this.eventVars[i].variableName == variableName) {
        var count = this.eventVars[i].variableAmount + delta;
        if((count >= this.eventVars[i].variableLimit[0]) && (count <= this.eventVars[i].variableLimit[1]) && key != "") {
          this.eventVars[i].variableAmount = count;
		  this.eventLog.push({time: this.timeDelta, eventKey: key});
		  console.log({varname: variableName, time: this.timeDelta, eventKey: key});
		  hasPushed = true;
        }
      }
    }
  },
  assignEventListeners: function() {
    var tmp = document.getElementById("variables");
    tmp.onmouseup = (e) => {
      if(this.isGoing) {
        this.resetTimeFunct();
      }
      else {
        this.startTimeFunct();
      }
    };
    for(var i = 0;i < this.eventJson.layouts.length;i++) {
      tmp = document.getElementById(this.eventJson.layouts[i].eventName);
      tmp.onmouseup = (e) => {
		  this.triggerEventFunct(e.srcElement.id);
        }
      };
    }
  }
}
