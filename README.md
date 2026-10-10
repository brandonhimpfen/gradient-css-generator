# gradient-css-generator

[![Support Open Work](https://img.shields.io/badge/Support-Open%20Work-0A0A0A?style=flat&logo=github)](https://github.com/brandonhimpfen/support) 
[![GitHub Sponsor](https://srv-cdn.himpfen.io/badges/github/github-flat.svg)](https://github.com/sponsors/brandonhimpfen) 
[![Buy Me a Coffee](https://srv-cdn.himpfen.io/badges/buymeacoffee/buymeacoffee-flat.svg)](https://buymeacoffee.com/brandonhimpfen) 
[![Ko-Fi](https://srv-cdn.himpfen.io/badges/kofi/kofi-flat.svg)](https://ko-fi.com/brandonhimpfen) 
[![PayPal](https://srv-cdn.himpfen.io/badges/paypal/paypal-flat.svg)](https://paypal.me/brandonhimpfen)

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
