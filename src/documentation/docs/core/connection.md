---
sidebar_position: 2
---

# Connection

Connection to a device can be called on any device; puck, pixl, bangle or even your own personal made devices. For this example we will be using the **puck** device.

## connect

`device.connect(callback?:Function)`

connect will start a connection to your device. An optional callback can be passed which will be called on connection success.

An example of the usage is below:

```javascript
puck.connect(function () {
  console.log("connected");
});
```

## disconnect

`device.disconnect(callback?:Function)`

disconnect will close a connection to your device. An optional callback can be passed which will be called a successful disconnect.

An example of the usage is below:

```javascript
puck.disconnect(function () {
  console.log("disconnected");
});
```
