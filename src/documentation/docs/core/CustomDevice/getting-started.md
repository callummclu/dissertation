---
sidebar_position: 1
---

# Getting Started

To create a custom device follow the instructions below.

1. Create a new device class which extends the DeviceController class.

```javascript
import { DeviceController } from "@espruino-tools/core";

export class MyNewDevice extends DeviceController {
  constructor() {
    super();
  }
}
```

2. From here you can use the `UART.write()` method to write directly to the device using the espruino commands or use the built in methods such as `device.Pin.analogOn('D1',0.5)`.

```javascript
export class MyNewDevice extends DeviceController {
  constructor() {
    super();
  }

  myNewMethod() {
    this.UART.write("/* do something in espruino js */");
  }

  motorOn(speed) {
    this.Pin.analogOn("D1", speed);
  }
}
```

3. From here you can import your new class and not have to worry about reimplementing connection, writing or evaluating methods.

```javascript
import { MyNewDevice } from "./my-new-device-class.js";

let device = new MyNewDevice();

device.connect(function () {
  console.log("connected");
});

device.myNewMethod();
device.motorOn();
```
