---
sidebar_position: 1
---

# Getting Started

This package is used to convert espruino-tools `core` style code into code that can be run natively on the espruino devices.

## Installation

### NPM

This package can be install directly through npm by using the following command

```
npm install @espruino-tools/transpiler
```

from here this can be imported like so

```javascript
import { transpile } from "@espruino-tools/transpiler";
```

### CDN

To get started in a plain html page, you can use the unpkg link

just import as shown below

```html
<script src="https://unpkg.com/@espruino-tools/transpiler@latest/min/main.min.js"></script>
```

From here you are ready to use the package like so

```html
<script>
  let Transpiler = ESPT_transpile;

  Transpiler.transpile(`${/* YOUR CODE HERE */}`);
</script>
```
