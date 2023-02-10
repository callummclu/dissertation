---
sidebar_position: 1
---

# Getting Started

Below are the methods to get started using Espruino Tools

## NPX Tool

This is by far the easiest way to get started with espruino tools, start by running the code below in the terminal

```zsh
npx create-espruino-app {directory}
```

_where `directory` is where you want your app to be built, this could be `my-first-espruino-app` for example to create a new directory called my-first-espruino-app in the directory you are currently in, alternatively you could pass `.` in as the directory to build the app in the current directory._

From here you can navigate to the desired directory and run `npm start` to start your development server

### Additional optional NPX tags

#### `--template`

You can follow your npx command with `--template {template}` to get started with a familar template, examples of the templates supported are:

- typescript
- react
- vue

#### `--clean-install`

Another available tag is `--clean-install`, we can use this to get an espruino tools project set up without any of the splash page or styling provided with the default install

### Example of usage

below is an example of creating a typescript espruino app with a clean install called my-first-espruino-app

```
npx create-espruino-app my-first-espruino-app --template typescript --clean-install
```

## NPM Package

If the NPX tool isnt suitable for your use case you can always just import the package with npm shown below.

```
npm install @espruino-tools/core
```

### Importing the package

the npm package by default comes with 4 possible imports `DeviceController`, `Puck`, `Pixl` and `Bangle`

an example below imports the base DeviceController class, which can be used to build your own custom classes

```javascript
import { DeviceController } from "@espruino-tools/core";
```

## CDN

To get started in a plain html page, you can use the unpkg link

just import as shown below

```html
<script src="https://unpkg.com/@espruino-tools/core@latest/min/main.min.js"></script>
```

From here you are ready to use the package like so

```html
<script>
  let puck = new ESPT_core.Puck();

  puck.connect(function () {
    console.log("connected");
  });
</script>
```
