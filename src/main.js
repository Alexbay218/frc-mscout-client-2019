var lyt = Object.assign({}, layoutClass);
var evt = Object.assign({}, eventsClass);
var dispElement = document.getElementById("display");
evt.initFunct(JSON.stringify(eventConfig));
lyt.initFunct(evt);

window.setInterval(() => {
    dispElement.style.width = window.innerWidth;
    dispElement.style.height = window.innerHeight;
	lyt.updateFunct();
},10)
