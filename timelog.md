# Timelog

- An asynchronous JavaScript library to control remote embedded devices [JavaScript, Promise, Arduino]
- Callum McLuskey
- 2469682M
- Jonathan Grizou

## Week 1 <!-- 16.5 hours -->

### 30 Sep 2022 <!-- 3.5 hours -->

- _1 hour_ meeting with supervisor
- _2 hour_ looking at the previous year attempt at project and getting the devices to work
- _0.5 hours_ reading over espruino website to get more detail on what the devices are and how they can be used.

### 1 Oct 2022 <!-- 6.5 hours -->

- _1 hour_ setup github organization and repositories for npm package, npx package, live demo site, documentation and dissertation.
- _0.5 hours_ set up proper branch management with dev, staging and production.
- _1 hours_ created and initialized the relevant technologies for npm package setup, set up typescrip and some linting and the structure for testing.
- _1.5 hours_ added basic Espruino connection methods, built a react testing environment to check these worked, **this has brough up concern that these methods may need to be asynchronous**.
- _1 hour_ explored azure devops and jira as a way to effectively enforce the agile working method.
- _0.5 hours_ set up an npm account.
- _1 hour_ investigated puck.js and how it can be implemented in an easy to use way.

### 2 Oct 2022 <!-- 6.5 hours -->

- _1 hour_ investigated uart.js
- _0.5 hour_ looked into reimplementing uart.js with a more custom implemented
- _2 hour_ implemented the remaining base class functions such as writing to the device evaluating from the device and resetting the device.
- _1 hour_ looked into puck.js functions and what should be implemented by my own implementation.
- _1 hour_ implemented an onPress and onLongPress function for the puck device.
- _1 hour_ fixed the implementation of of all implemented methods to work better with promises removing any guessing previous introduced.

## Week 2 <!-- 27 hours -->

### 4 Oct 2022 <!-- 1.5 hours-->

- _1.5 hours_ created a presentation ahead of supervisor meeting.

### 5 Oct 2022 <!-- 2 hours-->

- _1 hour_ Implemented asyncronous connect and disconnect methods with LED incdicators for connection and disconnection
- _1 hour_ Researched MD5 and why it had previously been used in last years project.

### 6 Oct 2022 <!-- 5 hours-->

- _2 hours_ Re-Implemented UART.js using typescript
- _0.5 hours_ Created a package repository on github
- _1.5 hours_ Put both the uart.js reimplementation and the device controller onto npm
- _1 hour_ investigated ssg(static site generation) technologies to get a start on the documentation.

### 7 Oct 2022 <!-- 6.5 hours-->

- _2 hours_ Looked at previous UART implementation to get a better understanding of design choices and see what can be improved, changed how the eval method works to solve eval problem in device-controller.
- _2 hours_ Investigated why uart eval method was not working.
- _2 hours_ Implemented extra Puck specific classes.
- _0.5 hours_ Updated README with up to date documentation on the device controller repository.

### 8 Oct 2022 <!-- 5 hours-->

- _1 hour_ Explored methods of displaying demos (found that enabling npm script to be used as a script tag package would make this a more straight forward task)
- _1 hour_ Explored Methods of Creating documentation, looked at Jekyll, Hugo, Docusaurus.
- _3 hours_ Set up Docusaurus site for documentation.

### 9 Oct 2022 <!-- 7 hours-->

- _1 hour_ Set up Azure Devops Organisation.
- _2 hours_ investigated Azure dev ops CI/CD.
- _1 hour_ Set up AWS Server to host Azure Pipeline.
- _1 hour_ Hosted Azure pipeline in AWS EC2 Server.
- _2 hours_ decided the puck methods to be implemented.

## Week 3 <!-- 32 hours -->

### 10 Oct 2022 <!-- 3 hours-->

- _2 hours_ Built React Demos site.
- _1 hour_ Built remaining build pipelines for uart, demos, documentation.

### 11 Oct 2022 <!-- 5 hours-->

- _2 hours_ invsetigated hde keyboard, controls and mouse espruino packages.
- _2 hours_ ran into issues of puck being stuck in bootloader mode, _still unresolved_
- _1 hour_ prepared presentation for supervisor

### 12 Oct <!-- 2 hours-->

- _1 hour_ continued prep for presentation for supervisor
- _1 hour_ met with supervisor

### 13 Oct <!-- 4 hours-->

- _3 hours_ Investigated BLE control packages for the puck, this will require more research as it looks like the methods of using them arent convenient for the simplicity of the package being designed.
- _1 hour_ figured out how to resolve the pucks issues and managed to update my puck to the most recent stable firmware.

### 14 Oct <!-- 2 hours-->

- _2 hours_ Developed a method of retrieving functions from a string of code.

### 15 Oct <!-- 7.5 hours-->

- _0.5 hours_ Reverted change to UART regarding eval function as change made wasnt neccessary and made communication to device less secure.
- _5 hours_ Implemented a method to grab code from the device and convert it to an array of objects containing function names and parameters, allowing for functions on device to be called from the web without using string versions of code.
- _2 hours_ Investigated issues with pipeline publishing npm package from dev branch and production branch instead of just dev branch **no solution as of yet**.

### 16 Oct <!-- 7.5 hours -->

- _1 hour_ developed a style for new connection modal using figma.
- _1 hour_ investigated methods of integrating css into javascript.
- _3 hours_ implemented `jss` library into package and set new styling as default for package.
- _2 hours_ implemented close modal button.
- _0.5 hours_ investigated why device controller does not maintain the ability to close modal, **still unresolved**

## Week 4 <!-- xx hours -->

### 17 Oct <!-- x hours -->
