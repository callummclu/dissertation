# Espruino tools

Espruino tools is a collection of packages and web applications that enable simplified development of the embedded espruino devices. This project adds the following packages and web applications:

## Packages

### UART

UART is a package which enables easy communication between espruino low energy bluetooth devices (BLE) and web browsers that support webBluetooh. Providing methods for writing to devices, evaluating data on devices as well as connecting and disconnecting from devices.

### Core

An interactive Espruino package to simplify the code interaction between Espruino device and the javascript code. This package intends to simplift the implementation of the [uart.ts]("123") package by making it more suitable to building stand alone web applications which incorporate web bluetooth espruino devices.

### Peer

This package enables easy peer to peer communication between 2 devices, sending data or video between the devices.

### Transpiler

A micro-compiler utilising `esprima` and `escodegen` to convert espruino tools syntax into espruino native code. This package was built for usage in the `@espruino-tools/core` package and the online espruino tools IDE.

### create-espruino-app

An npx tool to simplify the creation of a local Espruino web application. It does this by providing a single npx command with many tags to allow the developer to have as much control over their project as is possible. There is a massive focus on ease of hosting utlising webpack to build the project into the relevant html and js files.

## Web Applications

### Online environment

An online environment to upload and create espruino-tooling code on espruino devices, hosted for ease of use with espruino-tools.

### Demos hub

Espruino demos is a small web app used to show off what people have been doing with the `@espruino-tools` package, you can use this space to show off any cool projects youve been working on or even just explore and see what other people have been doing.

### Documentation

Small documentation for the whole espruino tools ecosystem, providing code examples alongside explanations for how to get started with each package or web application.

_These are just small descriptions for each of the packages for a more in depth description including features and run details visit the individual directory for the project_
