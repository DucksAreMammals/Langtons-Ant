"use strict";

class Ant {
  constructor(x, y, dir) {
    this.x = x;
    this.y = y;
    this.dir = dir;
  }

  update() {
    if (grid[this.x][this.y]) {
      this.dir = (this.dir == 0) ? 3 : this.dir - 1;
    } else {
      this.dir = (this.dir == 3) ? 0 : this.dir + 1;
    }

    grid[this.x][this.y] = !grid[this.x][this.y];

    switch (this.dir) {
      case 0:
        this.y -= 1;
        break;
      case 1:
        this.x += 1;
        break;
      case 2:
        this.y += 1;
        break;
      case 3:
        this.x -= 1;
        break;
    }

    this.x = (this.x < 0) ? grid.length - 1 : this.x;
    this.x = (this.x > grid.length - 1) ? 0 : this.x;
    this.y = (this.y < 0) ? grid[0].length - 1 : this.y;
    this.y = (this.y > grid[0].length - 1) ? 0 : this.y;
  }

  show() {
    fill(255, 0, 0);
    drawCell(this.x, this.y);
  }
}