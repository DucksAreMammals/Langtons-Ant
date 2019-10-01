"use strict";

let grid;
let ants;

let gridSize = 10;

let start = false;
let showGrid = true;
let ticksPerUpdate = 1;

let drawMode = "ant";

function setup() {
  createCanvas();
  goodResizeCanvas(windowWidth - 16, windowHeight*0.9);
  restart();
}

function draw() {
  render();

  if (start) {
    for (let i = 0; i < ticksPerUpdate; i++) {
      for (let i = 0; i < ants.length; i++) {
        ants[i].update();
      }
    }
  }
}

function touchMoved(e) {
  if (mouseX > -1 && mouseX < width && mouseY > -1 && mouseY < height) {
    e.preventDefault();
  }
}

