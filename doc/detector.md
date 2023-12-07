# Detector (Object)

## Summary
`HcvCore.detector` is an object that provides functionality for detecting and identifying color representations in a given string. It can handle a variety of color formats including hexadecimal, RGB, and HSL.

## Usage
```javascript
    // Detect color representation in a string
    const result = HcvCore.detector.detect("#000");
    // Output: true if the string contains a valid color representation

    // Get the type of color representation
    const type = HcvCore.detector.match("#000");
    // Output: 'hex3' for a 3-digit hexadecimal color representation
```