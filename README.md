# V-U-I

[![Join the chat at https://gitter.im/v-u-i/Lobby](https://badges.gitter.im/v-u-i/Lobby.svg)](https://gitter.im/v-u-i/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Build Status](https://travis-ci.org/kekecha/v-u-i.svg?branch=master)](https://travis-ci.org/kekecha/v-u-i)
[![Coverage Status](https://coveralls.io/repos/github/kekecha/v-u-i/badge.svg?branch=master)](https://coveralls.io/github/kekecha/v-u-i?branch=master)
[![npm package](https://img.shields.io/npm/v/v-u-i.svg)](https://www.npmjs.org/package/v-u-i)
[![NPM downloads](http://img.shields.io/npm/dt/v-u-i.svg)](https://www.npmjs.org/package/v-u-i)
![Gzip size](http://img.badgesize.io/https://unpkg.com/v-u-i/dist/v-u-i.js?compression=gzip&label=gzip%20size:%20JS)
![Gzip size](http://img.badgesize.io/https://unpkg.com/v-u-i/dist/v-u-i.css?compression=gzip&label=gzip%20size:%20CSS)
[![License](https://img.shields.io/npm/l/v-u-i.svg)](https://www.npmjs.com/package/v-u-i)
> V-U-I is a lightweight UI elements for Vue.js 2.0

## Documentation and Demo
[https://kekecha.github.io/v-u-i](https://kekecha.github.io/v-u-i)

## Install
```shell
npm install v-u-i --save
```

## Usage
**style**
``` html
<link rel="stylesheet" href="path/to/dist/v-u-i.css">
```

or import index.less to your project

``` css
@import "~v-u-i/src/less/index";
/* custom theme */
@rootDimmer: rgba(255, 255, 255, .2);
@rootBackground: rgba(35, 65, 80, 1);
@rootTextColor: rgba(255, 255, 255, 1);
@rootPrimaryColor: rgba(85, 205, 218, 1);
@rootSecondColor: rgba(85, 130, 150, 1);
```

**Globals (script tag)**
``` html
<html>
<head>
  <link rel="stylesheet" href="./v-u-i.css">
</head>
<body>
    <div id="app">
      <i-btn @click.native='open=!open'>Toggle Open</i-btn>
      <i-modal v-model='open'>
        <h1 style='text-align: center;'>Hello World!!!</h1>
        <br/><br/><br/>
      </i-modal>
    </div>
    <script src="./vue.js"></script>
    <script src="./v-u-i.js"></script>
    <script>
      new Vue({
        data: {
          open: false
        },
        el: '#app'
      });
    </script>
</body>
</html>
```

**CommonJS**
``` javascript
var Vue = require('vue');
var Vui = require('v-u-i');

Vue.use(Vui)
```

**ES6**
``` javascript
import Vue from 'vue'
import Vui from 'v-u-i'

Vue.use(Vui)
```

## Browser Support
Modern browsers and Internet Explorer 9+.

## LICENSE
This project is licensed under the terms of the MIT
