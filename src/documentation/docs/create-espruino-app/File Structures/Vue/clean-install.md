---
sidebar_position: 2
description: What are the files in my directory doing?
---

# Clean install

Sometimes file directories are confusing my hopes here are to clear any confusion up.

## node_modules

The node_modules folder is present in every nodejs application, it contains data relating to each library required to run your application.

## public

### index.html

This is your main html file, this is where you will add elements and structure your site.

## src

### App.vue

This is some basic javascript to show a splash screen with showing basic functionality of the package, this can be built on top of or completely removed from the directory

### main.js

This is used to initialise VUE in your index.html file.

## .gitignore

.gitignore is a simple file that restricts certain files from going into your git repo, in this case we are removing `node_modules`, `lib`, `.DS_Store`, `test-env` & `.husky/pre-commit`.

This can be changed in any way you want without changing functionality. I will however recommend you leave node_modules in here or your git repository will have unnessesary files in it.

## package-lock.json & package.json

These files specify what packages, run commands and some basic configuration for your project.

If you dont know much about this file id recommend just leaving it as it.

## README.md

This includes a simple welcome message with some text explaining how to get started

### babel.config.js

This is used to enable JSX in your vue project.

You will most likely never need to touch this.

### jsconfig.json

This is used to compile your project.

You will most likely never need to touch this.

### vue.config.json

This file is used to configure your vue project.

You will most likely never need to touch this.
