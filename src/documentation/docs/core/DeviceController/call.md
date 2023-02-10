---
sidebar_position: 3
---

# Call

The call object is a placeholder which holds all of the methods already on an espruino device.

When the device is connected or when new code is uploaded to the device a function will run in the back which populates the `Call` object with all of the device functions and parameters.

For example.

if your device has the methods `setSpeed(speed)` `forward()` `backward()` `left()` and `right()` the call object will be populated on device connection with these methods. To call on these methods its easy.

```javascript
let device = DeviceController();

device.Call.setSpeed(5);
device.Call.forward();
device.Call.backward();
device.Call.left();
device.Call.right();
```
