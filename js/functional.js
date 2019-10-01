"use strict";

function drag() {
  let x = floor(mouseX / gridSize);
  let y = floor(mouseY / gridSize);

  if (x < grid.length && y < grid[0].length && x > -1 && y > -1) {
    if (drawMode == "ant") {
      for(let i = 0; i < ants.length; i++) {
        if (ants[i].x == x && ants[i].y == y) {
          return;
        }
      }

      ants.push(new Ant(x, y, 0));
    } else if (drawMode == "cell") {
      grid[x][y] = true;
    } else {
      for(let i = 0; i < ants.length; i++) {
        if (ants[i].x == x && ants[i].y == y) {
          ants.splice(i, 1);
          grid[x][y] = false;
        }
      }
    }
  }
}

function mousePressed() {
  drag()
}

function mouseHovered() {
  if (mouseX < width && mouseY < height && mouseX > -1 && mouseY > -1) {
    let x = floor(mouseX / gridSize);
    let y = floor(mouseY / gridSize);

    if (drawMode == "ant") {
      fill(100, 0, 0);
    } else {
      fill(100);
    }

    drawCell(x, y);

    if (mouseIsPressed) {
      drag();
    }
  }
}

function restart() {
  grid = [];
  ants = [];

  for (let i = 0; i < width / gridSize; i++) {
    let row = []

    for (let j = 0; j < height / gridSize; j++) {
      row.push(false);
    }

    grid.push(row);
  }
}

function goodResizeCanvas(w, h) {
  w = floor(w / gridSize) * gridSize;
  h = floor(h / gridSize) * gridSize;

  resizeCanvas(w, h)
}