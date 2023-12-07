# HcvCore.creator (Object)

## Overview
The `HcvCore.creator` object, as defined in `src/index.js` and implemented in `src/creator/color-creator.js`, is a utility object that provides methods for creating various color representations. It supports a wide range of color formats including hexadecimal, RGB, HSL, and their alpha variants.

## How to use
```javascript
    // Create a new color instance with red, green, and blue values
    const color = new HcvCore.color(0, 0, 0);
    // Use the creator object to create a 3-digit hexadecimal color representation
    const hexColor = HcvCore.creator.create(color, "hex3");
    // Output: #000
```

## Methods
The `HcvCore.creator` object provides the following method:

* `create(color, type)`: This method takes a `Color` object and a string representing the desired color format. It returns a string representing the color in the specified format.
