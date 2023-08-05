## Installation

* Install [Nodejs](https://nodejs.org/en/) globally (at least version 10)
* Install **NPM** globally (at least version 6)
* Clone your repo
```
git clone git@github.com:premysl-holasek/trojka.git
```

## Directory structure

- `/assets/` contains resource files
- `/assets/twig/` - Source TWIG html files
- `/assets/sass/` - SASS *(.scss syntax)*
- `/assets/images/` - Images
- `/assets/js/` - JavaScript

**Everything compiles into `/dist' folders**

## Build

* In the root of the project, give the `npm install` command, which will install the nodejs packages

* The `gulp serve` command starts the compilation of **SASS, JavaScript, Twig.html and images** , creates a `/dist/` folder in the root and starts the local BrowserSync server

* The command `gulp postCSS` minifies the resulting `main.css` file and creates `main.min.cs`