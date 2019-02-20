var lyt = Object.assign({}, layoutClass);
var evt = Object.assign({}, eventsClass);
var dispElement = document.getElementById("display");
evt.initFunct(JSON.stringify(eventConfig));
lyt.initFunct(evt);

window.addEventListener("resize", () => {
  dispElement.style.width = window.innerWidth;
  dispElement.style.height = window.innerHeight;
});

window.addEventListener("beforeunload", function (event) {
  event.preventDefault();
  event.returnValue = '';
  return "";
});
