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
    this.dispElement.insertAdjacentHTML("beforeend", "<input class=\"form form-control\" type=\"number\" id=\"sourceTeamNumber\" placeholder=\"" + chosenTranslationObj.Form[0] + "\">");
    this.dispElement.insertAdjacentHTML("beforeend",
      "<select class=\"form form-control\" id=\"langSelect\">" +
        "<option value=\"EN\">EN</option>" +
        "<option value=\"ES\">ES</option>" +
      "</select>"
    );
    this.dispElement.insertAdjacentHTML("beforeend", "<input class=\"form form-control\" type=\"number\" id=\"targetTeamNumber\" placeholder=\"" + chosenTranslationObj.Form[1] + "\">");
    this.dispElement.insertAdjacentHTML("beforeend",
      "<select class=\"form form-control\" id=\"matchType\">" +
        "<option value=\"T\">" + chosenTranslationObj.Form[2] + "</option>" +
        "<option value=\"PF\">" + chosenTranslationObj.Form[3] + "</option>" +
        "<option value=\"PM\">" + chosenTranslationObj.Form[4] + "</option>" +
        "<option value=\"Q\">" + chosenTranslationObj.Form[5] + "</option>" +
        "<option value=\"QF\">" + chosenTranslationObj.Form[6] + "</option>" +
        "<option value=\"SF\">" + chosenTranslationObj.Form[7] + "</option>" +
        "<option value=\"F\">" + chosenTranslationObj.Form[8] + "</option>" +
      "</select>"
    );
    this.dispElement.insertAdjacentHTML("beforeend", "<input class=\"form form-control\" type=\"number\" id=\"matchNumber\" placeholder=\"" + chosenTranslationObj.Form[9] + "\">");
    this.dispElement.insertAdjacentHTML("beforeend", "<button class=\"form btn btn-primary\" id=\"startButton\">" + chosenTranslationObj.Form[10] + "</button>");
    this.dispElement.insertAdjacentHTML("beforeend", "<button class=\"form btn btn-info\" id=\"backButton\">" + chosenTranslationObj.Form[11] + "</button>");
    var langSelect = document.getElementById("langSelect");
    if(localStorage.lang != null) {
      langSelect.value = localStorage.lang;
    }
    langSelect.onchange = () => {
      localStorage.setItem("lang", langSelect.value);
      location.reload();
    };
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
