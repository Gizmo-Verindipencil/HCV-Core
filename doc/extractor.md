# HcvCore.extractor (Class)

## Overview
The `HcvCore.extractor` class, as defined in `src/index.js` and implemented in `src/extractor/color-extractor.js`, is a utility class that provides methods for extracting color information from various color representations. It supports a wide range of color formats including hexadecimal, RGB, HSL, and their alpha variants.

## How to Use
Here's an example of how to use the `HcvCore.extractor` class:
```javascript
    // Extract color information from a hexadecimal color representation
    const color = HcvCore.extractor.extract("#000");
    // Output: { r: 0, g: 0, b: 0, a: null }
```

## Methods
The `HcvCore.extractor` object provides the following method:

* `extract(expression)`: This method takes a string representing a color in any supported format. It returns a `Color` object representing the color extracted from the string.
