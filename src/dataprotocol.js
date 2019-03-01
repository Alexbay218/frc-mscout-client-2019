var dataProtocolClass = {
  qrcsObj: {},
  qrObj: {},
  dispElement: {},
  eventVars: [],
  eventLog: [],
  metadata: {},
  comments: "",
  processedString: "",
  isShowing: false,
  singleQR: false,
  hasDisplayed: false,
  timeInt: 250,
  initFunct: function() {
    this.isShowing = true;
    this.hasDisplayed = true;
    this.singleQR = false;
    this.dispElement = document.getElementById("display");
    this.dispElement.innerHTML = "";
    this.dispElement.insertAdjacentHTML("beforeend", "<div id=\"qrdisplay\"></div>");
    var tmp = document.getElementById("qrdisplay");
    var lowest = tmp.offsetWidth < tmp.offsetHeight ? tmp.offsetWidth : tmp.offsetHeight;
    tmp.insertAdjacentHTML("beforeend", "<div class=\"dropdown\"><button class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\" id=\"qrspacer\">" +
      "<div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" id=\"qrdropdown\"></div>" +
    "</button></dropdown>");
    tmp.insertAdjacentHTML("beforeend", "<canvas id=\"qrcanvas\"></canvas>");
    var tmp = document.getElementById("qrspacer");
    tmp.style.width = "100%";
    tmp.style.height = lowest*0.1 + "px";
    this.qrObj = new QRious({
      element: document.getElementById("qrcanvas"),
      padding: lowest*0.1,
      size: lowest,
      level: "L"
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
        this.qrObj.foreground = "#000000"
        this.qrObj.value = this.processedString;
      }
    }
    this.processFunct();
  },
  inputFunct: function(inMetadata, inEventVars, inEventLog, inComment) {
    this.metadata = inMetadata;
    this.eventVars = inEventVars;
    this.eventLog = inEventLog;
    this.comments = inComment;
  },
  processFunct: function(inStr = null) {
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
    this.processedString += "\"" + this.comments + "\"";
    if(this.eventLog.length <= 0 && (window.localStorage.savedString != null && window.localStorage.savedString != "") && this.comments == "") {
      this.processedString = window.localStorage.savedString;
    }
    else {
      var name = this.getName(this.processedString);
      if(inStr == null) {
        if(window.localStorage.savedArrName != null && window.localStorage.savedArrName != "") {
          window.localStorage.setItem(name, this.processedString);
          window.localStorage.setItem("savedArrName", name + "," + window.localStorage.savedArrName);
        }
        else {
          window.localStorage.setItem(name, this.processedString);
          window.localStorage.setItem("savedArrName", name);
        }
      }
    }
    window.localStorage.setItem("savedString", this.processedString);
    var arrName = window.localStorage.savedArrName.split(",");
    var option = "";
    for (var i = 0;i < arrName.length;i++){
       option += "<a class=\"dropdown-item\" href=\"#\" id=\"qrdrop_" + arrName[i] + "\">" + arrName[i] + "</a>";
    }
    if(inStr != null) {
      this.processedString = inStr;
    }
    $("span").remove(".lb");
    $("#qrspacer").append("<span class=\"lb\">" + this.getName(this.processedString) + "</span>");
    $("a").remove(".dropdown-item");
    $("#qrdropdown").append(option);
    for (var i = 0;i < arrName.length;i++){
       document.getElementById("qrdrop_" + arrName[i]).onclick = (event) => {
         this.processFunct(window.localStorage[event.target.id.substring(7)]);
       };
    }
    window.setTimeout(() => {
      this.copyFunct(this.processedString);
      if(this.eventLog.length <= 0 && (window.localStorage.savedString != null && window.localStorage.savedString != "") && this.comments == "") {
        $('#recordAlert').modal({backdrop: false});
        window.setTimeout(() => {$('#recordAlert').modal("hide")}, 1500);
      }
      this.qrcsObj.inputData(this.processedString);
    }, 250);
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
    for(var i = 0;i < 10;i++) {
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
    $('#copiedAlert').modal({backdrop: false});
    window.setTimeout(() => {$('#copiedAlert').modal("hide")}, 1500);
  },
  getName: (str) => {
    var newStr = str.slice();
    var metadata = newStr.substr(0,newStr.indexOf(":"));
    var sourceTeamTmp = metadata.substr(0,metadata.indexOf(";"));
    metadata = metadata.substr(metadata.indexOf(";")+1);
    var targetTeamTmp = metadata.substr(0,metadata.indexOf(";"));
    metadata = metadata.substr(metadata.indexOf(";")+1);
    var timeStampTmp = metadata.substr(0,metadata.indexOf(";"));
    metadata = metadata.substr(metadata.indexOf(";")+1);
    var matchTypeTmp = metadata.substr(0,metadata.indexOf(";"));
    metadata = metadata.substr(metadata.indexOf(";")+1);
    var matchNumberTmp = metadata.substr(0,metadata.indexOf(";"));
    var res = {
      sourceTeam: Number.parseInt(sourceTeamTmp),
      targetTeam: Number.parseInt(targetTeamTmp),
      timeStamp: Number.parseInt(timeStampTmp),
      matchType: matchTypeTmp,
      matchNumber: Number.parseInt(matchNumberTmp)
    }
    var currDate = (new Date(res.timeStamp));
    var dateStr = (currDate.getMonth() + 1) + "-" + currDate.getDate() + "-" + currDate.getFullYear();
    var name = res.matchType + res.matchNumber + "_" + res.targetTeam + "_" + dateStr;
    return name;
  }
}
