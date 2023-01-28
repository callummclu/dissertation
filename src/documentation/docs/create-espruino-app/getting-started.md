---
sidebar_position: 1
description: How to get started with the NPX Tool
---

# Getting Started

The NPX Tool provides and easy and vital method to get started on your espruino tools package, to get started its easy just enter the following command into the terminal

```zsh
npx create-espruino-app {directory}
```

_where `directory` is where you want your app to be built, this could be `my-first-espruino-app` for example to create a new directory called my-first-espruino-app in the directory you are currently in, alternatively you could pass `.` in as the directory to build the app in the current directory._

From here you can navigate to the desired directory and run `npm start` to start your development server

### Additional optional NPX tags

You can follow your npx command with `--template {template}` to get started with a familar template, examples of the templates supported are:

- typescript
- react
- vue

Another available tag is `--clean-install`, we can use this to get an espruino tools project set up without any of the splash page or styling provided with the default install

Finally you can use the `--peer` tag to start a project using the `@espruino-tools/peer` package, this will set up both pages needed for this to function.

### Example of usage

below is an example of creating a typescript espruino app with a clean install called my-first-espruino-app

```
npx create-espruino-app my-first-espruino-app --template typescript --clean-install
```

#### You're Done :)

you can now visit the `Core` docs [here](../category/core) to learn more about what and how you can work with the espruino devices.
