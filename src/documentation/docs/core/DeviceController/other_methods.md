---
sidebar_position: 4
---

# Other Methods

Here are some of the other methods available on the device controller

## dump

`dump(): Promise<string>`

This method will return all of the code stored on the device

```javascript
let device = new DeviceController();

device.dump().then((deviceData) => {
  console.log(deviceData);
});
```

## getDeviceType

`getDeviceType(): Promise<string>`

This method will return the type of the connected device, this could be `PuckJS`, `Pixl` and so on...

```javascript
let device = new DeviceController();

device.getDeviceType().then((type) => {
  console.log(type);
});
```

## getBattery

`getBattery(): Promise<number>`

This method will return the battery percentage of the connected device.

```javascript
let device = new DeviceController();

device.getBattery().then((percentage) => {
  console.log(percentage);
});
```

## eval

`eval<T>(code: string): Promise<T>`

This method will evaluate code on the device and return the calculated value. _where `T` is the type of data to be returned_

```javascript
let device = new DeviceController();

device.eval("console.log(1 + 2)").then((answer) => {
  console.log(answer);
});
```

## reset

`reset(): void`

This method will remove any code stored on the device.

```javascript
let device = new DeviceController();

device.reset();
```

## loadCode

`loadCode(code: string, flash?: boolean): void`

This method is used to load a string of code onto an espruino device, this can then be called using the Call object.

```javascript
let device = new DeviceController();

let code = `function forward(){
    console.log("forward")
}
`;

device.loadCode(code);
```

## upload

`upload(url: string, flash?: boolean)`

This method can be used to push your espruino code onto the device. This can be then called using the Call object.

```javascript
let device = new DeviceController();

device.upload("https://www.example.com");
```

## getDeviceFunctions

`getDeviceFunctions(): Promise<void>`

This method is used by the package to update the Call object with the methods on the device, this should only be used when the package isnt automatically updating the methods.

```javascript
let device = new DeviceController();

device.getDeviceFunctions();
```
