# V-U-I
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
