const inquirer = require('inquirer');
const svgBuilder = require('svg-builder');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./library.shapes/shapes.js');
async function generateLogo() {
    try {
      // Prompts user for input
      const userInput = await inquirer.prompt([
        {
          type: 'input',
          name: 'text',
          message: 'Enter up to three characters for the logo:',
          validate: (input) => input.length <= 3,
        },
        {
          type: 'input',
          name: 'textColor',
          message: 'Enter text color (keyword or hex):',
        },
        {
          type: 'list',
          name: 'shapeType',
          message: 'Choose a shape:',
          choices: ['circle', 'triangle', 'square'],
        },
        {
          type: 'input',
          name: 'shapeColor',
          message: 'Enter shape color (keyword or hex):',
        },
      ]);
  
      // Creates the corresponding shape object based on user input
      let shape;
      switch (userInput.shapeType) {
        case 'circle':
          shape = new Circle(userInput.shapeColor);
          break;
        case 'triangle':
          shape = new Triangle(userInput.shapeColor);
          break;
        case 'square':
          shape = new Square(userInput.shapeColor);
          break;
        default:
          throw new Error('Invalid shape type');
      }
  
      // Builds SVG
      const svgMarkup = `
        <svg width="300" height="200">
          ${shape.render()}
          <text x="150" y="100" fill="${userInput.textColor}" text-anchor="middle" dominant-baseline="middle">${userInput.text}</text>
        </svg>`;
  
      // Saves SVG to file
      fs.writeFileSync('logo.svg', svgMarkup);
  
      console.log('Generated logo.svg');
    } catch (error) {
      console.error('Error generating logo:', error);
    }
  }
  
  // Runs the application
  generateLogo();