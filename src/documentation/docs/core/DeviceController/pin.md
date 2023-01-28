---
sidebar_position: 1
---

# Pin

The pin class contains the following methods used to manipulate pins on an espruino device.

## val

`val(pin:string): Promise<string>`

This method returns the value of a desired pin on the device, this can be used as such

```javascript
let device = new DeviceController();

device.Pin.val("D10").then((pinVal) => {
  console.log(pinVal);
});
```

## analogOn

`analogOn(pin:string, val:number): void`

This method allows for PWM control over the devices pins and can be used as shown below.

```javascript
let device = new DeviceController();

let speed = 0.5;

device.Pin.analogOn("D10", speed);
```

## digitalOn

`digitalOn(pin:string, val:number): void`

This method allows for control over the devices pins and can be used as shown below. val can be either 1 or 0;

```javascript
let device = new DeviceController();

device.Pin.digitalOn("D10", 1);
```

## digitalToggle

`digitalToggle(pin:string): void`

This method is similar to digitalOn but will toggle the current value to the opposite of what it currently is

```javascript
let device = new DeviceController();

device.Pin.digitalToggle("D10");
```

## reset

`reset: (pin: string): void`

This will reset the pin to 0.

```javascript
let device = new DeviceController();

device.Pin.reset("D10");
```

## getInfo

`getInfo: (pin: string): Promise<PinInfo>`

This will return all information about the chosen pin.

```javascript
let device = new DeviceController();

device.Pin.getInfo("D10").then((pinInfo) => {
  console.log(pinInfo);
});
```
