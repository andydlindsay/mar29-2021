// class Rectangle {}

const Rectangle = class {
  constructor(width, length) {
    this.width = width;
    this.length = length;
  }

  area() {
    return this.width * this.length;
  }
};

const rectangle = new Rectangle(3, 4);
console.log('area', rectangle.area());

const Prism = class extends Rectangle {
  constructor(width, length, height) {
    super(width, length);

    this.height = height;
  }

  volume() {
    return this.area() * this.height;
  }
};

const prism = new Prism(3, 4, 5);
console.log('volume', prism.volume());
