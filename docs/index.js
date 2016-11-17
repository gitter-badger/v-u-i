import Vue             from 'vue'
import VueRouter       from 'vue-router'
import VueResource     from 'vue-resource'
import Vui             from 'v-u-i'

import AppVui          from './pages/AppVui'
import Readme          from './pages/Readme'
import Grid            from './pages/Grid'
import Button          from './pages/Button'
import Form            from './pages/Form'
import Table           from './pages/Table'
import Pagination      from './pages/Pagination'
import Card            from './pages/Card'
import Modal           from './pages/Modal'
import Collapse        from './pages/Collapse'
import Tab             from './pages/Tab'
import Popup           from './pages/Popup'
import Menu            from './pages/Menu'
import Message         from './pages/Message'

Vue.use(Vui)
Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
  mode: 'hash',
  routes: [{
    path: '/', component: AppVui, redirect: '/readme', children: [
      { path: 'readme', component: Readme, meta: { source: 'Readme' } },
      { path: 'grid', component: Grid, meta: { source: 'Grid' }  },
      { path: 'button', component: Button, meta: { source: 'Button' }  },
      { path: 'form', component: Form, meta: { source: 'Form' }  },
      { path: 'table', component: Table, meta: { source: 'Table' }  },
      { path: 'pagination', component: Pagination, meta: { source: 'Pagination' }  },
      { path: 'card', component: Card, meta: { source: 'Card' }  },
      { path: 'modal', component: Modal, meta: { source: 'Modal' }  },
      { path: 'collapse', component: Collapse, meta: { source: 'Collapse' }  },
      { path: 'tabs', component: Tab, meta: { source: 'Tab' }  },
      { path: 'popup', component: Popup, meta: { source: 'Popup' }  },
      { path: 'menu', component: Menu, meta: { source: 'Menu' }  },
      { path: 'message', component: Message, meta: { source: 'Message' }  },
    ]
  }, {
    path: '*', redirect: '/'
  }]
})

const app = new Vue({
  router
}).$mount('#root')
