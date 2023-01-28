# Accelerometer

Here are the accelerometer functions available on the puck device

## enableAccelMovement

`enableAccelMovement(): void`

This enables the accelerometers movement detection

```javascript
let device = new Puck();

device.accel.enableAccelMovement();
```

## disableAccelMovement

`disableAccelMovement()`

This disables the accelerometers movement detection

```javascript
let device = new Puck();

device.accel.disableAccelMovement();
```

## enableAccelBigMovement

`enableAccelBigMovement(): void`

This enables the accelerometers large movement detection

```javascript
let device = new Puck();

device.accel.enableAccelBigMovement();
```

## disableAccelBigMovement

`disableAccelBigMovement(): void`

This disables the accelerometers large movement detection

```javascript
let device = new Puck();

device.accel.disableAccelBigMovement();
```

## enableAccelTilt

`enableAccelTilt(): void`

This enables the tilt checker on the accelerometer

```javascript
let device = new Puck();

device.accel.enableAccelTilt();
```

## disableAccelTilt

`disableAccelTilt(): void`

This disables the tilt checker on the accelerometer

```javascript
let device = new Puck();

device.accel.disableAccelTilt();
```

## val

`val(): Promise<AccelDumpType>`

This will return the exact accelerometer values from the device.

```javascript
let device = new Puck();

device.accel.val().then((data) => {
  console.log(data);
});
```

## onMove

`onMove(func: Function)`

This will call a function when the device moves, big or small move is chosen by which movement is enabled using the `acc` value.

```javascript
let device = new Puck();

device.accel.onMove(function (acc) {
  // you can use acc here
  device.LED.toggle("red");
});
```

## onTilt

`onTilt(func: Function)`

This will call a function when the device is tilted using the `acc` value.

```javascript
let device = new Puck();

device.accel.onTilt(function (acc) {
  // you can use acc here
  device.LED.toggle("red");
});
```

## stepCount

Here are the step count methods

### enable

`stepCount.enable()`

Here you can initialise the step counter.

```javascript
let device = new Puck();

device.accel.stepCount.enable();
```

### disable

`stepCount.disable()`

Here you can stop the step counter from running.

```javascript
let device = new Puck();

device.accel.stepCount.disable();
```

### get

`stepCount.get(): Promise<number>`

This will return number of counted steps

```javascript
let device = new Puck();

device.accel.stepCount.get().then((count) => {
  console.log(count);
});
```
