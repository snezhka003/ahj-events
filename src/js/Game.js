import Board from './Board';

export default class Game {
  constructor(img) {
    this.counter = 0;
    this.img = img;
  }

  getRandom(max) {
    this.name = 'getRandom';
    return Math.floor(Math.random() * max);
  }

  resetClass() {
    this.name = 'resetClass';
    const cell = Array.from(document.querySelectorAll('div[data-cell]'));
    cell.forEach((item) => {
      const el = item;
      el.className = 'cell';
    });
  }

  changeCheck() {
    const span = document.querySelector('.header_check span');
    span.textContent = this.counter;
    return span.textContent;
  }

  addEvent() {
    const cell = Array.from(document.querySelectorAll('div[data-cell]'));
    cell.forEach((el) => {
      el.addEventListener('click', () => {
        if (el.classList.contains('active')) {
          this.counter += 1;
          this.changeCheck();
        }
      });
    });
  }

  insertImg(fieldSize, img) {
    const max = fieldSize ** 2;
    const i = this.getRandom(max);
    const cell = document.querySelector(`div[data-cell='${i}']`);
    this.resetClass();
    cell.classList.add('active');
    cell.append(img);
  }

  start() {
    const fieldSize = 4;
    const board = new Board(fieldSize);
    const img = board.start(this.img);
    this.addEvent();

    setInterval(() => {
      this.insertImg(fieldSize, img);
    }, 1000);
  }
}
