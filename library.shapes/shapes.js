class Shape {
    constructor(color) {
      this.color = color;
    }
  
    render() {
      // This method will be overridden by child classes
      throw new Error('Method not implemented');
    }
  }
  
  class Circle extends Shape {
    constructor(color) {
      super(color);
    }
  
    render() {
      return `<circle cx="150" cy="100" r="50" fill="${this.color}" />`;
    }
  }
  
  class Triangle extends Shape {
    constructor(color) {
      super(color);
    }
  
    render() {
      return `<polygon points="150,50 100,150 200,150" fill="${this.color}" />`;
    }
  }
  
  class Square extends Shape {
    constructor(color) {
      super(color);
    }
  
    render() {
      return `<rect x="100" y="50" width="100" height="100" fill="${this.color}" />`;
    }
  }
  
  module.exports = { Shape, Circle, Triangle, Square };