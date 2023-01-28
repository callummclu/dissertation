---
sidebar_position: 2
---

# LED

LED contains a set of methods which control the pucks onboard LED's.

## Types

- `LED` controls the Red LED on the puck
- `LED1` controls the Red LED on the puck
- `LED2` controls the Green LED on the puck
- `LED3` controls the Blue LED on the puck

## on

`puck.LED.on("red" | "green" | "blue")`

the on function will turn on an LED on the puck device, it can be called like below:

```javascript
puck.LED.on("red");
```

this will turn on the red LED

## off

`puck.LED.off("red" | "green" | "blue")`

the off function will turn off an LED on the puck device, it can be called like below:

```javascript
puck.LED.off("red");
```

this will turn off the red LED

## toggle

`puck.LED.toggle("red" | "green" | "blue")`

the toggle function will turn toggle an LED on the puck device, it can be called like below:

```javascript
puck.LED.toggle("red");
```

this will toggle the red LED on/off based on the previous state.

## flash

`puck.LED.flash("red" | "green" | "blue", ms: number)`

the flash function will turn toggle an LED on the puck device for the specified number of milliseconds(ms), it can be called like below:

```javascript
puck.LED.toggle("red", 100);
```

this will flash the red LED on/off for 100ms.

## val

`puck.LED.val("red" | "green" | "blue") : Promise<string>`

this will return a javascript Promise containing the current LED value, `'true'` for on, `'false'` for off. it can be called like below:

```javascript
puck.LED.val("red").then((state) => {
  console.log(state);
});
```
