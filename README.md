# gradient-css-generator

A package that helps generate CSS gradients.

## Installation

Install the package using npm:

```
npm install gradient-css-generator
```

## Usage

```
const generateGradient = require('gradient-css-generator');

const cssGradient = generateGradient('#ff0000', '#00ff00', 'to right');
console.log(cssGradient);
```

The `generateGradient` function takes three parameters:

`startColor`: The starting color of the gradient in hex format.
`endColor`: The ending color of the gradient in hex format.
`direction`: The direction of the gradient (e.g., `'to top'`, `'to bottom'`, `'to left'`, `'to right'`). The default is `'to bottom'`.

The function returns a CSS gradient string that you can use in your stylesheets.