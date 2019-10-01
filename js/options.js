"use strict";

function updateTPU(input) {
  ticksPerUpdate = int(input.value);
}

function changeGridSize(value) {
  gridSize = value;
  goodResizeCanvas(windowWidth - 16, windowHeight*0.9);
  restart();
}

function overrideCanvasSize() {
  goodResizeCanvas(float(document.getElementById("csow").value), float(document.getElementById("csoh").value))
  restart();
}