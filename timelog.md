# Timelog

- An asynchronous JavaScript library to control remote embedded devices [JavaScript, Promise, Arduino]
- Callum McLuskey
- 2469682M
- Jonathan Grizou

## Week 2 `<!-- thisWeek: 16.5hr, total:16.5hr -->`

### 30 Sep 2022 `<!-- 3.5 hours -->`

- _1 hour_ meeting with supervisor
- _2 hour_ looking at the previous year attempt at project and getting the devices to work
- _0.5 hours_ reading over espruino website to get more detail on what the devices are and how they can be used.

### 1 Oct 2022 `<!-- 6.5 hours -->`

- _1 hour_ setup github organization and repositories for npm package, npx package, live demo site, documentation and dissertation.
- _0.5 hours_ set up proper branch management with dev, staging and production.
- _1 hours_ created and initialized the relevant technologies for npm package setup, set up typescrip and some linting and the structure for testing.
- _1.5 hours_ added basic Espruino connection methods, built a react testing environment to check these worked, **this has brough up concern that these methods may need to be asynchronous**.
- _1 hour_ explored azure devops and jira as a way to effectively enforce the agile working method.
- _0.5 hours_ set up an npm account.
- _1 hour_ investigated puck.js and how it can be implemented in an easy to use way.

### 2 Oct 2022 `<!-- 6.5 hours -->`

- _1 hour_ investigated uart.js
- _0.5 hour_ looked into reimplementing uart.js with a more custom implemented
- _2 hour_ implemented the remaining base class functions such as writing to the device evaluating from the device and resetting the device.
- _1 hour_ looked into puck.js functions and what should be implemented by my own implementation.
- _1 hour_ implemented an onPress and onLongPress function for the puck device.
- _1 hour_ fixed the implementation of of all implemented methods to work better with promises removing any guessing previous introduced.

## Week 3 `<!-- thisWeek: 27hr, total: 43.5hr -->`

### 4 Oct 2022 `<!-- 1.5 hours-->`

- _1.5 hours_ created a presentation ahead of supervisor meeting.

### 5 Oct 2022 `<!-- 2 hours-->`

- _1 hour_ Implemented asyncronous connect and disconnect methods with LED incdicators for connection and disconnection
- _1 hour_ Researched MD5 and why it had previously been used in last years project.

### 6 Oct 2022 `<!-- 5 hours-->`

- _2 hours_ Re-Implemented UART.js using typescript
- _0.5 hours_ Created a package repository on github
- _1.5 hours_ Put both the uart.js reimplementation and the device controller onto npm
- _1 hour_ investigated ssg(static site generation) technologies to get a start on the documentation.

### 7 Oct 2022 `<!-- 6.5 hours-->`

- _2 hours_ Looked at previous UART implementation to get a better understanding of design choices and see what can be improved, changed how the eval method works to solve eval problem in device-controller.
- _2 hours_ Investigated why uart eval method was not working.
- _2 hours_ Implemented extra Puck specific classes.
- _0.5 hours_ Updated README with up to date documentation on the device controller repository.

### 8 Oct 2022 `<!-- 5 hours-->`

- _1 hour_ Explored methods of displaying demos (found that enabling npm script to be used as a script tag package would make this a more straight forward task)
- _1 hour_ Explored Methods of Creating documentation, looked at Jekyll, Hugo, Docusaurus.
- _3 hours_ Set up Docusaurus site for documentation.

### 9 Oct 2022 `<!-- 7 hours-->`

- _1 hour_ Set up Azure Devops Organisation.
- _2 hours_ investigated Azure dev ops CI/CD.
- _1 hour_ Set up AWS Server to host Azure Pipeline.
- _1 hour_ Hosted Azure pipeline in AWS EC2 Server.
- _2 hours_ decided the puck methods to be implemented.

## Week 4 `<!-- thisWeek: 32hr, total: 75.5hr -->`

### 10 Oct 2022 `<!-- 3 hours-->`

- _2 hours_ Built React Demos site.
- _1 hour_ Built remaining build pipelines for uart, demos, documentation.

### 11 Oct 2022 `<!-- 5 hours-->`

- _2 hours_ invsetigated hde keyboard, controls and mouse espruino packages.
- _2 hours_ ran into issues of puck being stuck in bootloader mode, _still unresolved_
- _1 hour_ prepared presentation for supervisor

### 12 Oct 2022 `<!-- 2 hours-->`

- _1 hour_ continued prep for presentation for supervisor
- _1 hour_ met with supervisor

### 13 Oct 2022 `<!-- 4 hours-->`

- _3 hours_ Investigated BLE control packages for the puck, this will require more research as it looks like the methods of using them arent convenient for the simplicity of the package being designed.
- _1 hour_ figured out how to resolve the pucks issues and managed to update my puck to the most recent stable firmware.

### 14 Oct 2022 `<!-- 2 hours-->`

- _2 hours_ Developed a method of retrieving functions from a string of code.

### 15 Oct 2022 `<!-- 7.5 hours-->`

- _0.5 hours_ Reverted change to UART regarding eval function as change made wasnt neccessary and made communication to device less secure.
- _5 hours_ Implemented a method to grab code from the device and convert it to an array of objects containing function names and parameters, allowing for functions on device to be called from the web without using string versions of code.
- _2 hours_ Investigated issues with pipeline publishing npm package from dev branch and production branch instead of just dev branch **no solution as of yet**.

### 16 Oct 2022 `<!-- 7.5 hours -->`

- _1 hour_ developed a style for new connection modal using figma.
- _1 hour_ investigated methods of integrating css into javascript.
- _3 hours_ implemented `jss` library into package and set new styling as default for package.
- _2 hours_ implemented close modal button.
- _0.5 hours_ investigated why device controller does not maintain the ability to close modal, **still unresolved**

## Week 5 `<!-- thisWeek: 32.5hr, total: 108hr -->`

### 17 Oct 2022 `<!-- 4 hours -->`

- _4 hours_ attempting to debug issue with closing modal **unresolved**

### 18 Oct 2022 `<!-- 8 hours -->`

- _4 hours_ resolved issue regarding closing modal, in turn allowed for evals to return either success or failure response giving more control to the user.
- _2 hours_ investigated using an external style sheet with the new uart implementation, investigated forcing class names with jss.
- _1 hour_ developed idea for showing styling guide in documentation, with idea of having multiple design choices.
- _1 hour_ created presentation ahead of meeting with supervisor

### 19 Oct 2022 `<!-- 3 hours -->`

- _2 hours_ Investigated car device documentation to gather how it could be used with espruino.
- _1 hour_ Implemented and played about with a car class to allow for forward, right and left movement of the car.

### 21 Oct 2022 `<!-- 9 hours -->`

- _2 hours_ implemented remaining puck methods.
- _1 hour_ investigated implementing an npx tool.
- _2 hours_ implemented the basis for an npx tool.
- _2 hours_ implemented a standard javascript template to work from for other templates.
- _2 hours_ implemented typescript, react and vue templates.

### 22 Oct 2022 `<!-- 8.5 hours -->`

- _2 hours_ made further changes to how the NPX tool works by giving a splash screen as an indication the package is successfully running
- _3 hours_ designed and implemented a standard screen for when the npx tool is run and started as a default.
- _1.5 hours_ investigated methods of cloning directories in github instead of whole repos
- _2 hours_ investigated git submodules and how they could be used to link the templates to a main create-espruino-app repo.

## Week 6 `<!-- thisWeek: 40hr, total: 148hr -->`

### 24 Oct 2022 `<!-- 6 hours -->`

- _2 hours_ Investigated transpilers and how they work
- _3 hours_ played around with implementing lexers and parsers
- _1 hour_ came to conclusion that this should be implemented at the end of the project and instead a mini parser should be used to

### 25 Oct 2022 `<!-- 9 hours -->`

- _2 hours_ implemented git submodules by creating individual repos for each template, allowing for repo updates without need to republish the package.
- _1 hour_ investigated best method of running typescript in a local server.
- _2 hours_ translated javascript template to typescript, react and vue.
- _1 hour_ linked up submodules and fixed switch case in npx tool to support these new templates.
- _1.5 hours_ created a presentation ahead of supervisor meeting.
- _1 hour_ investigated mdx
- _0.5 hours_ started an idea for npx documentation to ease starting progress

### 26 Oct 2022 `<!-- 11 hours -->`

- _2 hour_ investigated and implemented regex for mini parser
- _1.5 hours_ investigated using husky for package versioning.
- _0.5 hours_ added more information to presentation.
- _0.5 hours_ investigated how I can translate code from deviceController code into native espruino code using javascript objects and `.replace()`
- _2 hours_ implemented basic mini parser, _this can be improved on_
- _1 hour_ resolved NPX Tool issues regarding vue and typescript.
- _2 hours_ updated documentation fixing any issues left from before.
- _1 hour_ added mini explanation/example of creating a custom device.

### 27 Oct 2022 `<!-- 4 hours -->`

- _2 hours_ Investigated PeerJS
- _2 hours_ Started playing with peerJS and planning the direction of adding it to the package.

### 28 Oct 2022 `<!-- 4 hours -->`

- _2 hours_ Further investigation of peerjs.
- _2 hours_ Planned and cleaned up device controller by fixing upload method and removing any test logging.

### 29 Oct 2022 `<!-- 6 hours -->`

- _3 hours_ updated documentation.
- _2 hours_ investigated and added promises to NPX tool to allow for proper console output.
  \_ _1 hour_ changed NPX Tool to produce output from package installation.

## Week 7 `<!-- thisWeek: 34hr, total: 182hr -->`

### 31 Oct 2022 `<!-- 1 hour -->`

- _1 hour_ Explored CLI Spinner for NPX Tools

### 1 Nov 2022 `<!-- 7 hours -->`

- _2 hours_ added `--clean-install` tag to NPX Tool
- _2 hours_ created and added robot custom device example to Documentation.
- _3 hours_ designed and implemented modal for peerjs

### 2 Nov 2022 `<!-- 6 hours-->`

- _3 hours_ finally got an example of peerjs working
- _1 hour_ created presentation for supervisor meeting
- _1 hour_ met with supervisor
- _1 hour_ investigated how to use https on localhost with webpack

### 3 Nov 2022 `<!-- 8 hours -->`

- _1 hour_ moved peerjs to its own package
- _1 hour_ removed peer from devicecontroller
- _1 hour_ depreciated devicecontroller and created new package core.
- _2 hours_ fixed issues arisen from this change of package name.
- _3 hours_ added `--peer` tag to npx tool and updated repos to support this.

### 4 Nov 2022 `<!-- 3 hours -->`

- _1 hour_ fixed AWS issues for pipeline
- _2 hours_ added pipeline for new peer package and resolved issues with new core package.

### 5 Nov 2022 `<!-- 6 hours -->`

- _3 hours_ resolved peer package issue with sending both video and data at the same time
- _1 hours_ researched and implemented using https with react and vue
- _2 hours_ updated cea repos with new working package

### 6 Nov 2022 `<!-- 3 hours-->`

- _3 hours_ populated documentation with everything done so far.

## Week 8 `<!-- thisWeek: 22hr, total: 204hr -->`

### 7 Nov 2022 `<!-- 2 hours -->`

- _1 hour_ fixed incorrect references and links in the device controller (now core) section.
- _1 hour_ investigated angolia search with docusaurus.

### 9 Nov 2022 `<!-- 2 hours -->`

- _1 hour_ created power point ahead of supervisor meeting.
- _1 hour_ tested peerjs implementation ahead of supervisor meeting.

### 10 Nov 2022 `<!-- 2 hours -->`

- _2 hours_ mad an attempt to clean up peer on js and ts templates for the npx tool, this did not get saved so will need to be redone in the future.

### 11 Nov 2022 `<!-- 3 hour -->`

- _1 hour_ Made a post on the espruino form to try and get some recognition from the community for what has been done so far.
- _2 hours_ researched status report and dissertation layout.

### 12 Nov 2022 `<!-- 6 hours -->`

- _5 hours_ began making a start to writing the dissertation by making notes for each section in dynalist.
- _1 hour_ investigated using codesandbox for documentation.

### 13 Nov 2022 `<!-- 7 hours -->`

- _1 hour_ investigated using a single webpack file to be used for both build and web server
- _1 hour_ fixed connection domain issue in peer package, added a link to bottom of modal.
- _2 hours_ revamped js and ts repos with new peer directory layout.
- _1 hour_ fixed npx tool importing of peer package to install on load instead of through static version.
- _2 hours_ cleared any issues in all cea repos and branches, fixed imports, webpack, added .env file to js and ts repos for package name

## Week 9 `<!-- thisWeek: 21.5hr, total: 225.5hr -->`

### 14 Nov 2022 `<!-- 6.5 hours -->`

- _1 hour_ investigated unpkg
- _3 hours_ added minified versions of core, uart and peer for usage with unpkg.
- _0.5 hours_ added this new way of importing to the documentation.
- _2 hours_ cleaned up README pages and added badges to show build statuses.
- _1 hour_ created supervisor meeting powerpoint

### 15 Nov 2022 `<!-- 4 hours -->`

- _1 hour_ supervisor meeting
- _3 hours_ explored google package for hand tracking.

### 17 Nov 2022 `<!-- 2 hours -->`

- _2 hours_ further investigated dissertation write up, added notes from findings.

### 19 Nov 2022 `<!-- 4 hours -->`

- _1 hour_ fixed minor errors in documentation
- _2 hours_ added file structure for all repos into documentation
- _1 hour_ updated all README.md files for relevant packages.

### 20 Nov 2022 `<!-- 5 hours -->`

- _1 hour_ investigated getting data from media stream for peer package
- _3 hour_ started developing robot demo (incomplete)
- _1 hour_ investigated google tracking package further.

## Week 10 `<!-- thisWeek: 11hr, total: 236.5hr  -->`

### 21 Nov 2022 `<!-- 5 hours -->`

- _1 hour_ created meeting presentation for wednesday.
- _2 hours_ started adding information to latex demo.
- _1 hour_ investigated making a latex pipeline on azure.
- _1 hour_ more dissertation notes added.

### 22 Nov 2022 `<!-- 4 hours -->`

- _2 hours_ created piano demo
- _1 hour_ updated peer package with video data option
- _1 hour_ more dissertation notes added

### 23 Nov 2022 `<!-- 2 hours -->`

- _1 hour_ met with supervisor.
- _1 hour_ investigated rewriting abstract.

## Week 11 `<!-- thisWeek: 11hr, total: 247.5hr -->`

### 28 Nov 2022 `<!-- 2 hours -->`

- _2 hours_ designed new demo site.

### 29 Nov 2022 `<!-- 0.5 hours -->`

- _0.5 hours_ create presentation ahead of supervisor meeting

### 3 Dec 2022 `<!-- 4 hours -->`

- _4 hours_ implemented most of new demo site, will be continued tomorrow

### 4 Dec 2022 `<!-- 4.5 hours -->`

- _4.5 hours_ further added content to the demos page.

## Week 12 `<!-- thisWeek: 28hr, total: 275.5hr -->`

### 6 Dec 2022 `<!-- 4 hours -->`

- _2 hours_ investigated JEST
- _2 hours_ devised plan for utilising JEST with NPX and NPM

### 7 Dec 2022 `<!-- 4 hours-->`

- _2 hours_ began implementing JEST to test the UART package
- _2 hours_ removed peer error in cea-js and cea-ts

### 8 Dec 2022 `<!-- 9 hours -->`

- _6 hours_ fully implemented tests for uart package.
- _1 hour_ added tests to pipeline.
- _2 hours_ began refactoring uart.

### 9 Dec 2022 `<!-- 10 hours -->`

- _1 hour_ continued uart refactor.
- _3 hours_ fully implemented tests for core package.
- _5 hours_ fully implemented tests for npx package.
- _1 hour_ added tests for both to pipeline.

### 10 Dec 2022 `<!-- 1 hours -->`

- _1 hour_ added piano demo to demos site.

## Week 13 `<!-- thisWeek:19hr, total: 294.5hr -->`

### 12 Dec 2022 `<!-- 1.5 hour -->`

- _1.5 hours_ began writing notes for status report

### 13 Dec 2022 `<!-- 9 hours-->`

- _4 hours_ added husky to all package repositories, including empty transpiler repo
- _1 hour_ improved status report notes.
- _1 hour_ made presentation for supervisor meeting.
- _2 hours_ converted status report notes into status report.
- _1 hour_ began re-writing abstract.

### 14 Dec 2022 `<!-- 8.5 hours -->`

- _2 hours_ Initial revamp of UART completed
- _2 hours_ re-writing abstract.
- _1 hour_ met with supervisor.
- _1 hour_ made changes to status report to ensure it reads as intended.
- _0.5 hour_ fixed core package test issue.
- _2 hours_ fixed uart pipeline and added pipelines for transpiler and online IDE to save time next semester.

## Week 14 `<!-- thisWeek:XXhr, total: 294.5hr -->`

## 11 Jan 2023 `<!-- 9 hours -->`

- _3 hours_ Investigated transpilers and how to begin building one
- _2 hours_ looked and found a package for parsing & tokenising
- _4 hours_ Set up package in NPM, Azure, Github including pipelines husky setup and testing.

## 12 Jan 2023 `<!-- 5 hours -->`

- _3 hours_ Planned out how to approach building the transpiler.
- _2 hours_ Read articles online describing how to effectively build a compiler.

## 13 Jan 2023 `<!-- 8 hours -->`

- _2 hours_ Investigated `EScodegen` a package which could convert AST's to code.
- _3 hours_ began implementation of the transpiler using esprima and escodegen in a TDD manner
- _3 hours_ Ran into issues with passing functions as parameters, eventually fixed this but it took longer than expected.

## 14 Jan 2023 `<!-- 5.5 hours -->`

- _4 hours_ spent today adding functionality for specific declarations and expressions within the transpiler
- _0.5 hours_ added proper README.md to transpiler package
- _1 hour_ Identified remaining declarations and expressions to be covered in the transpiler

## 15 Jan 2023 `<!-- X hours -->`

- _2 hours_ converted demo site to use `espruino-demo.config.json` instead of `README.md`.
- _1 hours_ added thumbnails to demo page list as well as fixed the positioning of the demos.
