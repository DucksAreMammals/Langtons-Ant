"use strict";

function renderGrid() {
  stroke(0);

  for (let i = 0; i <= grid.length*gridSize; i += gridSize) {
    line(i, 0, i, height);
  }

  for (let i = 0; i <= grid[0].length*gridSize; i += gridSize) {
    line(0, i, width, i);
  }
}

function renderCells() {
  fill(0);
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j]) {
        drawCell(i, j);
      }
    }
  }
}

function drawCell(x, y) {
  noStroke();
  rect(x*gridSize, y*gridSize, gridSize, gridSize);
}

function render() {
  clear();

  if (showGrid) {
    renderGrid();
  }

  renderCells();

  for (let i = 0; i < ants.length; i++) {
    ants[i].show();
  }

  mouseHovered();
}