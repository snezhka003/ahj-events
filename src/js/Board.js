export default class Board {
  constructor(fieldSize) {
    this.fieldSize = fieldSize;
  }

  createSection() {
    this.name = 'createSection';
    const body = document.querySelector('body');
    const section = '<section class="game_field"><div class="field_container" id="fieldGame"></div></section>';
    body.insertAdjacentHTML('beforeend', section);
    return section;
  }

  createImg(src) {
    this.name = 'createImg';
    const img = document.createElement('img');
    img.src = src;
    img.className = 'img_goblin';
    return img;
  }

  generateField(n) {
    this.name = 'generateField';
    const field = document.getElementById('fieldGame');
    for (let i = 0; i < n ** 2; i += 1) {
      const cell = `<div class="cell" data-cell="${i}"></div>`;
      field.insertAdjacentHTML('beforeend', cell);
    }
    return field;
  }

  start(srcImg) {
    this.createSection();
    this.generateField(this.fieldSize);
    const img = this.createImg(srcImg);
    return img;
  }
}
