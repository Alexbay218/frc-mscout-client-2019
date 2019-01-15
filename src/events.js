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
    var count = 0;
    var key = "";
    var title = "";
    var shouldLog = false;
    if(this.isGoing) {
      this.updateTimeFunct();
    }
    for(var i = 0;i < this.eventJson.events.length;i++) {
      if(this.eventJson.events[i].eventName == eventName) {
        shouldLog = (this.eventJson.events[i].variableLink.length == 0);
        key = this.eventJson.events[i].eventKey;
        title = this.eventJson.events[i].eventTitle;
        for(var j = 0;j < this.eventJson.events[i].variableLink.length;j++) {
          for(var k = 0;k < this.eventVars.length;k++) {
            if(this.eventJson.events[i].variableLink[j].var == this.eventVars[k].variableName) {
              count = this.eventVars[k].variableAmount + this.eventJson.events[i].variableLink[j].amt;
              if((count >= this.eventVars[k].variableLimit[0]) && (count <= this.eventVars[k].variableLimit[1])) {
                this.eventVars[k].variableAmount = count;
                shouldLog = true;
              }
            }
          }
        }
      }
    }
    if(shouldLog && this.isGoing) {
      this.eventLog.push({time: this.timeDelta, eventKey: key, eventTitle: title});
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
      };
    }
  }
}
