---
sidebar-position: 1
---

# Robot Example

Lets get started with a robot example, watch the video below or follow along the blog post below.

<iframe width="100%" height="315" src="https://www.youtube.com/embed/LXb3EKWsInQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Specification

What does the device do?

- The robot should be able to drive forward, backwards, left and right.
- User chosen speed.

## Let's get started

First of all lets run the npx tool to get a basis for starting work.

```
npx create-espruino-app my-robot-app --clean-install
```

This will give us a concrete start to build from and start our robot work on.

Lets clean up the repository quickly as we dont need everything the defauly splashpage has.

_`--clean-install` is used as we dont want the default template_

## Lets Start Coding.

### Building the Robot Object

`src/robot.js`

within our src folder lets start by creating a new file `robot.js`. This will act as our robot class and will have all the relevant methods we need to start working with the robot.

lets start coding, in your `robot.js` file lets declare a new class and give it our required methods.

```javascript
import DeviceController from "@espruino-tools/core";

export class Robot extends DeviceController {
  constructor() {
    super();
  }

  forward() {
    // empty for now
  }
  backward() {
    // empty for now
  }
  left() {
    // empty for now
  }
  right() {
    // empty for now
  }
}
```

next we should implement the speed variable.

```javascript
import DeviceController from "@espruino-tools/core";

export class Robot extends DeviceController {
  constructor() {
    super();
    this.speed = 1;
  }

  setSpeed(speed) {
    this.speed = speed;
  }

  forward() {
    // empty for now
  }
  backward() {
    // empty for now
  }
  left() {
    // empty for now
  }
  right() {
    // empty for now
  }
}
```

From here we can start using the built in `DeviceController` methods to get some work done, lets implement the `DeviceController`'s `Pin` method to allow for some pin control.

```javascript
import DeviceController from "@espruino-tools/device-controller";

export class Robot extends DeviceController {
  constructor() {
    super();
    this.speed = 1;
  }

  setSpeed(speed) {
    this.speed = speed;
  }

  forward() {
    this.Pin.digitalOn("D3", 1);
    this.Pin.analogOn("D1", this.speed);
    this.Pin.analogOn("D2", this.speed);
  }
  backward() {
    this.Pin.digitalOn("D3", 0);
    this.Pin.analogOn("D1", this.speed);
    this.Pin.analogOn("D2", this.speed);
  }
  left() {
    this.Pin.digitalOn("D3", 1);
    this.Pin.analogOn("D1", this.speed);
  }
  right() {
    this.Pin.digitalOn("D3", 1);
    this.Pin.analogOn("D2", this.speed);
  }
}
```

This is alot to digest lets break it down,

```javascript
this.Pin.analogOn();
```

this method allows for PWM control on motors by providing a pin, for example `D1` and a speed between 0 and 1.

```javascript
this.Pin.digitalOn();
```

this method is similar to the one above but only allows either a 0 or 1 input.

What are `D1 -> D3`, these are made up pins but I will give an explanation to what they do.

- `D1` left motor on
- `D2` right motor on
- `D3` motor direction, 1 for forward, 0 for backwards

### Using the Robot Object

`src/index.js`

Lets start by importing this class into the `index.js` file located in the `src` directory.

```javascript
import { Robot } from "./robot";
```

From here we can start to write our methods to be called in the `html` file.

```javascript
import { Robot } from "./robot";

let robot = new Robot();

export function changeSpeed(speed) {
  robot.setSpeed(speed / 100);
}

export function forward() {
  robot.forward();
}

export function backward() {
  robot.backward();
}

export function right() {
  robot.right();
}

export function left() {
  robot.left();
}
```

Above we have initialised our robot object and created some exportable funtions to be called directly on our html page.

### Adding the Buttons

`public/index.html`

inside the `public` folder you will find an `index.html` file. since our javascript importing is sorted we can get started straight away.

we can start by removing the

```html
<div id="page-root"></div>
```

this is used by the templates splash screen and isnt relevant to us.

From here we can start creating buttons with our methods as onclick events.

```html
<body>
  <script src="src/index.js"></script>
  <button onchange="myEspruinoApp.forward()">Forward</button>
  <button onchange="myEspruinoApp.backward()">Backward</button>
  <button onchange="myEspruinoApp.right()">Right</button>
  <button onchange="myEspruinoApp.left()">Left</button>
  <input
    type="range"
    min="0"
    max="1"
    value="100"
    onchange="myEspruinoApp.changeSpeed(this.value)"
  />
</body>
```

What is `myEspruinoApp` ?

This is the default name of our package imported by html.

we can change this if we want within `webpack.config.js` and `webpack.build.config.js`

by changing line 20 in `webpack.config.js`

and line 16 in `webpack.build.config.js`

from

```javascript
library: "myEspruinoApp";
```

to

```javascript
library: "robot";
```

Lets change our HTML file to use the new library name.

```HTML
<body>
  <script src="src/index.js"></script>
  <button onchange="robot.forward()">Forward</button>
  <button onchange="robot.backward()">Backward</button>
  <button onchange="robot.right()">Right</button>
  <button onchange="robot.left()">Left</button>
  <input
    type="range"
    min="0"
    max="100"
    value="100"
    onchange="robot.changeSpeed(this.value)"
  />
</body>
```

## We're Done

Congrats on creating your first custom Espruino Tools app, code for this project can be found [here](here)
