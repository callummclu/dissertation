# IR

Here are all the Infrared methods available on through the core package.

## transmit

`transmit(data: number[]): void`

This method allows for the infrared control of external devices.

```javascript
let device = new DeviceController();

device.IR.transmit([1, 2, 3, 4, 5, 6, 7, 8, 9]);
```
