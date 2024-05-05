# Drop Down Initializer

Dynamically add drop-down functionality to a collection of HTML elements without external dependencies.

Check out the repo on GitHub [here](https://github.com/jwsmith24/drop-down-init).

## How to Install

Install via npm with the following command:

`npm install -S drop-down-init`

## Usage Instructions

Import `initDropdown` from the package. The function accepts an array of menu option objects with the format:

```javascript
const menuElement = {
  id: '<elementId>',
  href: '<relative path to target>',
};
```

Add `drop-icon` to the class list of the drop down menu icon/button.

After the function executes, the drop down menu will become visible on mouseover and each element will redirect to the given path on click. The drop down menu will hide on mouseout or when the menu icon is clicked.

> [!NOTE]
> This is a simple module completed as part of The Odin Project JavaScript course.
