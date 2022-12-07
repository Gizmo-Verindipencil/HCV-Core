# Type (Object)

## Summary
`HcvCore.color` is a object for color format that can be handled by `HcvCore`.

## Property
|type|format|delimiter|alpha|example|
|---|---|:---:|:---:|---|
|hex3|hex|-|no|`#000` <br> `#fff`|
|hex4|hex|-|yes|`#0000` <br> `#ffff`|
|hex6|hex|-|no|`#000000` <br> `#ffffff`|
|hex8|hex|-|yes|`#00000000` <br> `#ffffffff`|
|hsl-alpha|hsl|`,`|yes|`hsl(0, 0%, 0%, 100%)` <br> `hsl(0, 0%, 100%, 1)`|
|hsl|hsl|`,`|no|`hsl(0, 0%, 0%)` <br> `hsl(0, 0%, 100%)`|
|hsla|hsla|`,`|yes|`hsla(0, 0%, 0%, 100%)` <br> `hsla(0, 0%, 100%, 1)`|
|rgb-alpha|rgb|`,`|yes|`rgb(0, 0, 0, 100%)` <br> `rgb(255, 255, 255, 1)`|
|rgb|rgb|`,`|no|`rgb(0, 0, 0)` <br> `rgb(255, 255, 255)`|
|rgb-percent-alpha|rgb|`,`|yes|`rgb(0%, 0%, 0%)` <br> `rgb(100%, 100%, 100%)`|
|rgba|rgba|`,`|yes|`rgba(0, 0, 0, 100%)` <br> `rgba(255, 255, 255, 1)`|
|rgba-percent|rgba|`,`|yes|`rgba(0%, 0%, 0%, 100%)` <br> `rgba(100%, 100%, 100%, 1)`|
|space-delimited-hsl|hsl|` `|no|`hsl(0 0% 0%)` <br> `hsl(0 0% 100%)`|
|space-delimited-hsl-alpha|hsl|` `|yes|`hsl(0 0% 0% 100%)` <br> `hsl(0 0% 100% 1)`|
|web-color|-|-|no|`white` <br> `black`|

## Usage
```javascript
    HcvCore.type.hex3;
    // hex3
```