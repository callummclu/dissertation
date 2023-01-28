---
sidebar_position: 3
description: What are the files in my directory doing?
---

# Plain

Sometimes file directories are confusing my hopes here are to clear any confusion up.

## node_modules

The node_modules folder is present in every nodejs application, it contains data relating to each library required to run your application.

## public

### index.html

This is your main html file, this should not need to be touched.

## src

### pages

#### espruino-splash.jsx

This includes the content to be shown on the home page (splash page, Host).

#### peer.jsx

This includes the content to be shown on the peer page (connector).

### styles

#### espruino-splash-styles.css

This is used to add styles to the splash page.

### App.jsx

This file collates all of the components and pages.

### index.jsx

This is the main javascript file that is given to the HTML file. This initialises react.

### routes.jsx

This is used to create a page router in react.

## .env

This is used to enable HTTPS in react, this is required to use the video sharing of peer package.

## .gitignore

.gitignore is a simple file that restricts certain files from going into your git repo, in this case we are removing `node_modules`, `lib`, `.DS_Store`, `test-env` & `.husky/pre-commit`.

This can be changed in any way you want without changing functionality. I will however recommend you leave node_modules in here or your git repository will have unnessesary files in it.

## package-lock.json & package.json

These files specify what packages, run commands and some basic configuration for your project.

If you dont know much about this file id recommend just leaving it as it.

## README.md

This includes a simple welcome message with some text explaining how to get started
