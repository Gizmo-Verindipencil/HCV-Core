# HcvCore.detector (Object)

## Overview
The `HcvCore.detector` object, as defined in `src/index.js` and implemented in `src/detector/color-detector.js`, is a utility object that provides methods for detecting and identifying color representations in a given string. It can handle a variety of color formats including hexadecimal, RGB, HSL, and their alpha variants.

## How to Use
Here's an example of how to use the `HcvCore.detector` object:
```javascript
    // Detect color representation in a string
    const result = HcvCore.detector.detect("#000");
    // Output: Array of ColorDetectorResult if the string contains a valid color representation

    // Get the type of color representation
    const type = HcvCore.detector.match("#000");
    // Output: 'hex3' for a 3-digit hexadecimal color representation
```

## Methods
The `HcvCore.detector` object provides the following methods:
* `detect(expression)`: Detects color representations in the given string and returns an array of `ColorDetectorResult` objects.
* `match(expression)`: Returns the type of color representation in the given string.