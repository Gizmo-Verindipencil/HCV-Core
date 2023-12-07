# HcvCore.color (Class)

## Overview
The `HcvCore.color` class, as defined in `src/index.js` and implemented in `src/color.js`, is a utility class that provides methods for handling color operations in your application. It allows you to create color instances with red, green, blue, and alpha values.

## How to Use
Here's an example of how to use the `HcvCore.color` class:
```javascript
    // Create a new color instance with red, green, blue, and alpha values
    const myColor = new HcvCore.color(1, 2, 3, 4);
    // Output: { r: 1, g: 2, b: 3, a: 4 }
```

## Properties
Each `HcvCore.color` instance has the following properties:
* `r`: The red value (0-255).
* `g`: The green value (0-255).
* `b`: The blue value (0-255).
* `a`: The alpha value (0-100).

## Methods
The `HcvCore.color` class provides the following methods:
* `rgb()`: Returns an array of the red, green, and blue values.
* `rgba()`: Returns an array of the red, green, blue, and alpha values.