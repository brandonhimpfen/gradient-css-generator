const Color = require('color');

function generateGradient(startColor, endColor, direction) {
  const start = Color(startColor);
  const end = Color(endColor);

  // Generate the CSS gradient based on the specified direction
  let gradient = '';

  switch (direction) {
    case 'to top':
      gradient = `to top, ${start.hex()}, ${end.hex()}`;
      break;
    case 'to bottom':
      gradient = `to bottom, ${start.hex()}, ${end.hex()}`;
      break;
    case 'to left':
      gradient = `to left, ${start.hex()}, ${end.hex()}`;
      break;
    case 'to right':
      gradient = `to right, ${start.hex()}, ${end.hex()}`;
      break;
    default:
      gradient = `to bottom, ${start.hex()}, ${end.hex()}`;
      break;
  }

  return `background: linear-gradient(${gradient});`;
}

module.exports = generateGradient;
