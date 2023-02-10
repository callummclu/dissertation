![version](https://img.shields.io/npm/v/@espruino-tools/peer)
![build](https://img.shields.io/azure-devops/build/espruino-tooling/Espruino%2520tools/16)
![deployment](https://img.shields.io/azure-devops/build/espruino-tooling/Espruino%2520tools/18?color=blue&label=deployment)

# @espruino-tools/peer

This package enables easy peer to peer communication between 2 devices, sending data or video between the devices.

## Features

- Send data between 2 devices.
- Send video between 2 devices.
- QR code for easy phone scan connection.

On top of these features this package features a well designed interface for QR scanning.

## Installation

### CDN

We use unpkg to allow for CDN usage within the script tags it can be accessed like so.

```html
<script src="https://unpkg.com/@espruino-tools/peer@latest/min/main.min.js"></script>
```

### NPM

run `npm i @espruino-tools/peer` in the root of your node project.

This can then be utlised by:

```javascript
import { Host } from "@espruino-tools/peer";

let p = new Host();

p.connectData((data) => {
  console.log(data);
});
```
