# HcvCore.type (Object)

## Overview
The `HcvCore.type` object, as defined in `src/index.js` and implemented in `src/color-expression-type.js`, is a utility object that provides a set of predefined constants for different color formats. Each constant represents a specific color format that can be handled by `HcvCore`.

## Properties
Each `HcvCore.type` instance has the following properties:
* `hex3`: Represents a 3-digit hexadecimal color format. Example: `#000`, `#fff`.
* `hex4`: Represents a 4-digit hexadecimal color format with alpha value. Example: `#0000`, `#ffff`.
* `hex6`: Represents a 6-digit hexadecimal color format. Example: `#000000`, `#ffffff`.
* `hex8`: Represents an 8-digit hexadecimal color format with alpha value. Example: `#00000000`, `#ffffffff`.
* `hslAlpha`: Represents an HSL color format with alpha value. Example: `hsl(0, 0%, 0%, 100%)`, `hsl(0, 0%, 100%, 1)`.
* `hsl`: Represents an HSL color format. Example: `hsl(0, 0%, 0%)`, `hsl(0, 0%, 100%)`.
* `hsla`: Represents an HSLA color format. Example: `hsla(0, 0%, 0%, 100%)`, `hsla(0, 0%, 100%, 1)`.
* `rgbAlpha`: Represents an RGB color format with alpha value. Example: `rgb(0, 0, 0, 100%)`, `rgb(255, 255, 255, 1)`.
* `rgb`: Represents an RGB color format. Example: `rgb(0, 0, 0)`, `rgb(255, 255, 255)`.
* `rgbPercentAlpha`: Represents an RGB color format with alpha value in percentage. Example: `rgb(0%, 0%, 0%)`, `rgb(100%, 100%, 100%)`.
* `rgba`: Represents an RGBA color format. Example: `rgba(0, 0, 0, 100%)`, `rgba(255, 255, 255, 1)`.
* `rgbaPercent`: Represents an RGBA color format in percentage. Example: `rgba(0%, 0%, 0%, 100%)`, `rgba(100%, 100%, 100%, 1)`.
* `spaceDelimitedHsl`: Represents a space delimited HSL color format. Example: `hsl(0 0% 0%)`, `hsl(0 0% 100%)`.
* `spaceDelimitedHslAlpha`: Represents a space delimited HSL color format with alpha value. Example: `hsl(0 0% 0% 100%)`, `hsl(0 0% 100% 1)`.
* `webColor`: Represents a web color format. Example: `white`, `black`.
