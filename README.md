# HCV-Core
A library for creating and extracting color representations.

## Summary
HCV-Core is a library provides creating, detecting, extracting for color representations. 

## Installation
```
npm i hcv-core
```

## Usage
### Node.js
```javascript
const core = require("hcv-core");

/*
 * creating.
 */
const source = new core.color(255, 255, 255, 100);
const created = core.creator.create(source, "hex8");
console.log(created);
// #ffffffff

/*
 * detecting.
 */
const detected = core.detector.detect("#ffffffff");
console.log(detected);
// true

/*
 * extracting.
 */
const extracted = core.extractor.extract("#ffffffff");
console.log(extracted);
// {
//     r: 255,
//     g: 255,
//     b: 255,
//     a: 100
// }
```

### Browser
```html
<script src="js/hcv-core.min.js">
<script>
    /*
     * creating.
     */
    const source = new HcvCore.color(255, 255, 255, 100);
    const created = HcvCore.creator.create(source, "hex8");
    console.log(created);
    // #ffffffff

    /*
     * detecting.
     */
    const detected = HcvCore.detector.detect("#ffffffff");
    console.log(detected);
    // true

    /*
     * extracting.
     */
    const extracted = HcvCore.extractor.extract("#ffffffff");
    console.log(extracted);
    // {
    //     r: 255,
    //     g: 255,
    //     b: 255,
    //     a: 100
    // }
</script>
```