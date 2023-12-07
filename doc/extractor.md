# Extractor (Object)

## Summary
`HcvCore.extractor` is an object that provides functionality for extracting color information from a given color representation. It can handle a variety of color formats including hexadecimal, RGB, and HSL.

## Usage
```javascript
    // Extract color information from a hexadecimal color representation
    const color = HcvCore.extractor.extract("#000");
    console.log(color);
    // Output: 
    // {
    //     r: 0,
    //     g: 0,
    //     b: 0,
    //     a: null
    // }
```