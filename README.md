# HCV-Core
A library for creating and extracting color representations.

## Summary
HCV-Core is a library provides creating, detecting, extracting for color representations. 

## Installation
```
npm i hcv-core
```

## Usage
```javascript
const core = require("hcv-core");

const source = new core.color(255, 255, 255, 100);
const created = core.creator.create(source, "hex8");
console.log(created);
// #ffffffff

const detected = core.detector.detect("#ffffffff");
console.log(detected);
// true

const extracted = core.extractor.extract("#ffffffff");
console.log(extracted);
// {
//     r: 255,
//     g: 255,
//     b: 255,
//     a: 100
// }
```