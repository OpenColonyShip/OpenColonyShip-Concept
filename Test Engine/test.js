var canvas; // canvas as seen in the DOM
var ui;     // the actual draw-able canvas

function init() {
  canvas = document.createObject("CANVAS");
  ui = canvas.getContext("2d");
}

function colours() {
  ui.line(0, 0, 10, 10);
}
