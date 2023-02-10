---
sidebar_position: 1
---

# Getting Started

_This packaged is not primarily intended to be used on its own but as it's functionality is essential to how the DeviceController package works it makes sense to have documentation of its inner workings_

## Installation

### NPM

This package can be install directly through npm by using the following command

```
npm install @espruino-tools/uart
```

from here this can be imported like so

```javascript
import { uart } from "@espruino-tools/uart";
```

### CDN

To get started in a plain html page, you can use the unpkg link

just import as shown below

```html
<script src="https://unpkg.com/@espruino-tools/uart@latest/min/main.min.js"></script>
```

From here you are ready to use the package like so

```html
<script>
  let UART = ESPT_uart;

  UART.write("LED1.set();\n");
</script>
```
