var dataProtocolClass = {
  qrcsObj: {},
  qrObj: {},
  dispElement: {},
  eventVars: [],
  eventLog: [],
  metadata: {},
  processedString: "",
  isShowing: false,
  singleQR: false,
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
    this.dispElement.insertAdjacentHTML("beforeend", "<button class=\"btn btn-info\" id=\"qrbutton\">" + chosenTranslationObj.Form[11] + "</button>");
    var backButton = document.getElementById("qrbutton");
    backButton.onmouseup = () => {
      this.backFunct();
    }
    this.dispElement.insertAdjacentHTML("beforeend", "<button class=\"btn btn-primary\" id=\"sqrbutton\">" + chosenTranslationObj.Form[12] + "</button>");
    var sqrButton = document.getElementById("sqrbutton");
    sqrButton.onmouseup = () => {
      if(this.singleQR) {
        this.singleQR = false;
        this.displayFunct();
      }
      else {
        this.singleQR = true;
        this.qrObj._htOption.colorDark = "#000000"
        this.qrObj.makeCode(this.processedString);
      }
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
    if(this.eventLog.length <= 0 && (window.localStorage.savedString != null && window.localStorage.savedString != "")) {
      this.processedString = window.localStorage.savedString;
    }
    window.localStorage.setItem("savedString", this.processedString);
    this.copyFunct(this.processedString);
    this.qrcsObj.inputData(this.processedString);
  },
  displayFunct: function() {
    if(this.isShowing && !this.singleQR) {
      this.qrcsObj.nextCode();
      this.timeInt = Number.parseInt(document.getElementById("qrslider").value);
      window.setTimeout(() => {
        if(this.isShowing) {
          this.displayFunct();
        }
      }, this.timeInt);
    }
  },
  backFunct: function() {},
  copyFunct: function(str) {
    var el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }
}
