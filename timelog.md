# Timelog

- An asynchronous JavaScript library to control remote embedded devices [JavaScript, Promise, Arduino]
- Callum McLuskey
- 2469682M
- Jonathan Grizou

## Week 1

### 30 Sep 2022

- _1 hour_ meeting with supervisor
- _2 hour_ looking at the previous year attempt at project and getting the devices to work
- _0.5 hours_ reading over espruino website to get more detail on what the devices are and how they can be used.

### 1 Oct 2022

- _1 hour_ setup github organization and repositories for npm package, npx package, live demo site, documentation and dissertation.
- _0.5 hours_ set up proper branch management with dev, staging and production.
- _1 hours_ created and initialized the relevant technologies for npm package setup, set up typescrip and some linting and the structure for testing.
- _1.5 hours_ added basic Espruino connection methods, built a react testing environment to check these worked, **this has brough up concern that these methods may need to be asynchronous**.
- _1 hour_ explored azure devops and jira as a way to effectively enforce the agile working method.
- _0.5 hours_ set up an npm account.
- _1 hour_ investigated puck.js and how it can be implemented in an easy to use way.

### 2 Oct 2022

- _1 hour_ investigated uart.js
- _0.5 hour_ looked into reimplementing uart.js with a more custom implemented
- _2 hour_ implemented the remaining base class functions such as writing to the device evaluating from the device and resetting the device.
- _1 hour_ looked into puck.js functions and what should be implemented by my own implementation.
- _1 hour_ implemented an onPress and onLongPress function for the puck device.
- _1 hour_ fixed the implementation of of all implemented methods to work better with promises removing any guessing previous introduced.

## Week 2

### 4 Oct 2022

- _1.5 hours_ created a presentation ahead of supervisor meeting.

### 5 Oct 2022

- _1 hour_ Implemented asyncronous connect and disconnect methods with LED incdicators for connection and disconnection
- _1 hour_ Researched MD5 and why it had previously been used in last years project.

### 6 Oct 2022

- _2 hours_ Re-Implemented UART.js using typescript
- _0.5 hours_ Created a package repository on github
- _1.5 hours_ Put both the uart.js reimplementation and the device controller onto npm
- _1 hour_ investigated ssg(static site generation) technologies to get a start on the documentation.

### 7 Oct 2022

- _2 hours_ Looked at previous UART implementation to get a better understanding of design choices and see what can be improved, changed how the eval method works to solve eval problem in device-controller.
- _2 hours_ Investigated why uart eval method was not working.
- _2 hours_ Implemented extra Puck specific classes.
- _0.5 hours_ Updated README with up to date documentation on the device controller repository.

### 8 Oct 2022

- _1 hour_ Explored methods of displaying demos (found that enabling npm script to be used as a script tag package would make this a more straight forward task)
- _1 hour_ Explored Methods of Creating documentation, looked at Jekyll, Hugo, Docusaurus.
- _3 hours_ Set up Docusaurus site for documentation.

### 9 Oct 2022

- _1 hour_ Set up Azure Devops Organisation.
- _2 hours_ investigated Azure dev ops CI/CD.
- _1 hour_ Set up AWS Server to host Azure Pipeline.
- _1 hour_ Hosted Azure pipeline in AWS EC2 Server.
- _2 hours_ decided the puck methods to be implemented.

## Week 3
