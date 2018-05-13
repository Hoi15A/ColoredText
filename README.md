# Make your console outputs colored!

(yes, I know this has been done a ton of times before, but whatever)

## How to use
```js
const clr = require("coloredtext");
console.log(clr.rawForeground("list")) // to get a list of the foreground colors available
console.log(clr.rawBackground("list")) // to get a list of the background colors available
console.log(clr.bg.white(clr.blue("Hello, world!"))) // prints the string "Hello, world!" with blue text and white background.
```
There is also support for underline and bold.