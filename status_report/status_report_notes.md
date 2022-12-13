# Status Report Notes

## Motivation

Why is this being done

- Prepare computer scientist students for working with embedded systems achieving working real life demos.
- Allow non programmers to get started with interactive robotics whilst developing their programming skills in a language used in industry.

## Aims

This project will:

- create an ecosystem of tools to reduce entry barrier to remote embedded systems programming whilst allowing experienced developers to benefit from ease of life additions.

## Progress

What has been done so far

- core package
- uart package
  - UI/UX improvements.
  - removed redunant code.
- demos
  - built site
  - added currently built demos.
- documentation
  - built and populated documentation.
- npx tool
  - build tool
  - added tags support for clean install and peer package
  - added support for js, ts, react, vue
- peer
  - extended the peerjs package for easier implementation with espruino devices.

## Problems and risks

### Problems

- UART package used depreciated Webbluetooth methods.
- core package parser, needs fixed slow, doesnt correctly parse everything.
- core package and peer package are not fully tested.

### Risks

- something to do with transpiler, parser maybe.
- evaluation of user testing data.

## Plan

### Semester 2

- _Week 1 - 3_: develop a transpiler
  - **Deliverable**: A package containing a working transpiler that converts the developed espruino tools language into native espruino code along with tests to ensure working functionality.
- _Week 4 - 6_: build online IDE using the transpiler.
  - **Deliverable**: A web app that allows for device connection, code transfer and direct code writing, accepting both espruino tools via the transpiler and native espruino code.
- _Week 7_: finalise UART implementation.
  - **Deliverable**: polished UART package with up to date javascript and webbluetooth methods used, using promises to remove any need for timer delays.
- _Week 8 - 10_: writing dissertation
  - **Deliverable**: creating a fully fleshed out paper with enough time for multiple drafts ensuring the supervisor has enough time to read over my second to last draft.
