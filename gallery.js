class Gallery {
  constructor(query) {
    if (query) this.update(query);
  }

  get current() {
    return this.elements[this.index];
  }
  
  set(idx) {
    this.current?.classList.remove('active');
    this.index = this.elements.length && (this.elements.length + idx) % this.elements.length;
    this.current?.classList.add('active');
  }
  
  left() {
    this.set(this.index - 1);
  }
  right() {
    this.set(this.index + 1);
  }

  update(query) {
    if (query) this.query = query;
    this.elements = Array.from(document.querySelectorAll(this.query));
    this.index = 0;
    this.set(0);
  }
}