# V-U-I
[![npm package](https://img.shields.io/npm/v/v-u-i.svg)](https://www.npmjs.org/package/v-u-i)
[![NPM downloads](http://img.shields.io/npm/dt/v-u-i.svg)](https://www.npmjs.org/package/v-u-i)
[![License](https://img.shields.io/npm/l/v-u-i.svg)](https://www.npmjs.com/package/v-u-i)
> V-U-I is a UI elements for Vue.js 2.0

## Install
```shell
npm install v-u-i --save
```

## Usage
**entry.js**
``` javascript
import Vue from 'vue'
import Vui from 'v-u-i'

Vue.use(Vui)
```

**template**
``` html
<i-btn @click.native='open=!open'>Toggle Open</i-btn>
<i-modal v-model='open'>
  Hello World!!!
</i-modal>
```

## Browser Support
Modern browsers and Internet Explorer 9+.

## LICENSE
This project is licensed under the terms of the MIT
