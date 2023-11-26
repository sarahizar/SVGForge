const { Circle, Triangle, Square } = require('../library.shapes/shapes.js');

describe('Shape Classes', () => {
  test('renders Circle SVG markup', () => {
    const circle = new Circle('#ff0000'); // Put this as a red color
    const result = circle.render();
    expect(result).toMatch('<circle cx="150" cy="100" r="50" fill="#ff0000" />');
  });

  test('renders Triangle SVG markup', () => {
    const triangle = new Triangle('#00ff00'); // Put this as a green color
    const result = triangle.render();
    expect(result).toMatch('<polygon points="150,50 100,150 200,150" fill="#00ff00" />');
  });

  test('renders Square SVG markup', () => {
    const square = new Square('#0000ff'); // Put this as a blue color
    const result = square.render();
    expect(result).toMatch('<rect x="100" y="50" width="100" height="100" fill="#0000ff" />');
  });
});