# Other Methods

Here are some of the other methods available on the puck device.

## getLightVal

`getLightVal(): Promise<number>`

This method will return the current light value of the environment near the puck device.

```javascript
let device = new DeviceController();

device.getLightVal().then((val) => {
  console.log(val);
});
```

## getTemperature

`getTemperature(): Promise<number>`

This method will return the temperature detected by the device.

```javascript
let device = new DeviceController();

device.getTemperature().then((temp) => {
  console.log(temp);
});
```

## onPress

`onPress(func: Function)`

This method will call a function when the user pressed on the pucks button.

```javascript
let device = new DeviceController();

device.onPress(function () {
  device.LED.toggle("red");
});
```

## onLongPress

`onLongPress(long: Function, short: Function, ms?: number)`

This is similar to the `onPress` function but allows for a second input from the same button.

```javascript
let device = new DeviceController();

device.onLongPress(
  function () {
    device.LED.toggle("red");
  },
  function () {
    device.LED.toggle("green");
  }
);
```
