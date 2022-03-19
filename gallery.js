class Gallery {
  constructor(query) {
    this.elements = Array.from(document.querySelectorAll(query));
    this.index = 0;
    this.set(0);
  }

  get current() {
    return this.elements[this.index];
  }

  set(idx) {
    this.current?.classList.remove('active');
    this.index = (this.elements.length + idx) % this.elements.length;
    this.current?.classList.add('active');
  }

  left() {
    this.set(this.index - 1);
  }
  right() {
    this.set(this.index + 1);
  }
}