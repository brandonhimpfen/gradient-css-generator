const generateGradient = require('./index');

const gradient1 = generateGradient('#ff0000', '#0000ff', 'to bottom');
console.log(gradient1);
// Output: "background: linear-gradient(to bottom, #ff0000, #0000ff);"

const gradient2 = generateGradient('#00ff00', '#ffff00', 'to right');
console.log(gradient2);
// Output: "background: linear-gradient(to right, #00ff00, #ffff00);"

const gradient3 = generateGradient('#000000', '#ffffff');
console.log(gradient3);
// Output: "background: linear-gradient(to bottom, #000000, #ffffff);"