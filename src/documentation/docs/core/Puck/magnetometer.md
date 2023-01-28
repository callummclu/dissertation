# Magnetometer

Methods available for the magnetometer

## enableMag

`enableMag():void`

Used to enable the magnetometer

```javascript
let device = new Puck();

device.enableMag();
```

## enableField

`enableField():void`

Used to enable the field detection of the magnetometer

```javascript
let device = new Puck();

device.enableField();
```

## disableMag

`disableMag():void`

Used to disable the magnetometer

```javascript
let device = new Puck();

device.disableMag();
```

## disableField

`disableField():void`

Used to disable the field detection of the magnetometer

```javascript
let device = new Puck();

device.disableField();
```

## onMag

`onMag(func: Function):void`

sets up the function to be called on mag change.

```javascript
let device = new Puck();

device.enableMag();

device.onMag(function (data) {
  console.log(data);
});
```

## onField

`onField(func: Function):void`

sets up the function to be called on mag field change.

```javascript
let device = new Puck();

device.enableField();

device.onField(function (data) {
  console.log(data);
});
```
