---
sidebar_position: 3
description: What are the files in my directory doing?
---

# Peer

Sometimes file directories are confusing my hopes here are to clear any confusion up.

## node_modules

The node_modules folder is present in every nodejs application, it contains data relating to each library required to run your application.

## public

### index.html

This is your host html file, this is where you will add elements and structure your site.

### peer.html

This is your connector html file, this is where you will add elements and structure your site.

## src

### styles

#### app.scss

if you dont know scss is a css preprocessor, in simple terms this just means css with added features.

You can write normal css in here or visit [here](https://sass-lang.com/) to see the official scss documentation and start using it in your projects .

### espruino-template.js

This is some basic javascript to show a splash screen with showing basic functionality of the package, this can be built on top of or completely removed from the directory

### index.js

This is the main javascript file that is given to the index.html file, any code you want to use in your HTML file should be exported in this file.

### peer.js

This is the main javascript file that is given to the peer.html file, any code you want to use in your HTML file should be exported in this file.

## .env

This file is used to specify your apps name, this will impact how the package is used inside the html file.

if the .env `APP_NAME` is set to myEspruinoApp you can use exported methods in your index.js file like so

```html
<script>
  myEspruinoApp.myMethod();
</script>
```

## .gitignore

.gitignore is a simple file that restricts certain files from going into your git repo, in this case we are removing `node_modules`, `lib`, `.DS_Store`, `test-env` & `.husky/pre-commit`.

This can be changed in any way you want without changing functionality. I will however recommend you leave node_modules in here or your git repository will have unnessesary files in it.

## package-lock.json & package.json

These files specify what packages, run commands and some basic configuration for your project.

If you dont know much about this file id recommend just leaving it as it.

## README.md

This includes a simple welcome message with some text explaining how to get started

### webpack.config.js

This file provides the ability to run the project in localhost, it also contains the information to properly build the package into its html and js files when `npm run build` is run.

You will most likely never need to touch this.
