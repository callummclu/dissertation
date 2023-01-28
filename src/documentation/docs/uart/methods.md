---
sidebar_position: 1
---

# Methods

Here are some of the methods available through the UART package.

## write

`write(code: string)`

This method is used to write code directly to the espruino device in the native espruino js language.

_the addition of ";\n" is neccessary here to ensure the following lines of code function_

```javascript
let device = new DeviceController();

device.UART.write("LED1.set();\n");
```

## eval

`eval<T>(expr: string, cb:Function): void`

This function uses a call back to return a calculated value, similar to `write` you can run code on the device, this method has the addition of returning a response.

```javascript
let device = new DeviceController();

device.UART.eval("LED1;\n", (val) => {
  console.log(val);
});
```

## isConnected

is connected is an attribute on the UART package in which you can check if a device is connected.

```javascript
let device = new DeviceController();

console.log(device.isConnected);
```
