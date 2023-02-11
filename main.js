/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/Board.js
class Board {
  constructor() {
    this.board = null;
  }
  createBoard(number) {
    const board = document.querySelector('.board');
    for (let i = 0; i < Math.floor(number) ** 2; i += 1) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      board.appendChild(cell);
    }
    this.board = board;
  }
  getBoard(number) {
    this.createBoard(number);
    return this.board;
  }
}
;// CONCATENATED MODULE: ./src/js/Character.js
class Character {
  constructor() {
    this.character = 'active';
    this.position = -1;
  }
  randomPosition(size) {
    const divs = document.querySelectorAll('.cell');
    const randomInt = Math.floor(Math.random() * size ** 2);
    if (this.position >= 0) {
      divs[this.position].classList.remove(this.character);
      this.position = -1;
    }
    divs[randomInt].classList.add(this.character);
    this.position = randomInt;
  }
}
;// CONCATENATED MODULE: ./src/js/GamePlay.js


class GamePlay {
  constructor() {
    this.size = 4;
    this.countDead = null;
    this.countLost = null;
    this.count = null;
  }
  startGame() {
    const board = new Board();
    board.getBoard(this.size);
    const goblin = new Character();
    this.onCellClick();
    setInterval(() => {
      goblin.randomPosition(this.size);
      this.countLost.textContent = +this.countLost.textContent + this.count;
      if (this.count !== 1) {
        setTimeout(this.count = 1, 1000);
      }
      this.showResult();
    }, 1000);
  }
  onCellClick() {
    const cells = document.querySelectorAll('.cell');
    this.countDead = document.querySelector('.dead');
    this.countLost = document.querySelector('.lost');
    for (let i = 0; i < cells.length; i++) {
      cells[i].addEventListener('click', () => {
        if (cells[i].classList.contains('active')) {
          cells[i].classList.remove('active');
          this.countDead.textContent = +this.countDead.textContent + 1;
        } else {
          this.countLost.textContent = +this.countLost.textContent + 1;
        }
        this.showResult();
        this.count = 0;
      });
    }
  }
  reset() {
    this.countDead.textContent = 0;
    this.countLost.textContent = 0;
  }
  showResult() {
    if (this.countDead.textContent > 10) {
      alert('Победа!!');
      this.reset();
    }
    if (this.countLost.textContent > 5) {
      alert('Поражение!');
      this.reset();
    }
  }
}
;// CONCATENATED MODULE: ./src/js/app.js

const game = new GamePlay();
game.startGame();
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;