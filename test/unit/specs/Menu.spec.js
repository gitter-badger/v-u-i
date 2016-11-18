import Vue from 'vue'
import Menu from '../../../src/elems/Menu'

describe('Menu.vue', () => {

  it('slot', () => {
    const menuItems = [
      { name: 'Home', text: 'Home' },
      { name: 'Orders', text: 'Orders' },
      { name: 'Blogs', text: 'Blogs', children: [
        { name: 'blogs-1', text: 'blogs-1'},
        { name: 'blogs-2', text: 'blogs-2'},
        { name: 'blogs-2', text: 'same item name'}
      ] }
    ]
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => {
        return <div>
          <Menu
            items={menuItems}
          >
          </Menu>
        </div>
      }
    })
    let items = [].slice.call(vm.$el.querySelectorAll('*:not(li)>.i-menu>ul>li>a'))
    items.forEach((i, index)=>{
      expect(i.textContent.trim()).to.equal(menuItems[index].text)
    })
    return Promise.resolve()
      .then(()=>new Promise((resolve, reject)=>{
        items[0].parentElement.dispatchEvent(new Event('click'))
        vm.$children[0].$nextTick(()=>{
          expect(items[0].parentElement.className).to.equal('active')
          resolve()
        })
      }))
      .then(()=>new Promise((resolve, reject)=>{
        items[1].parentElement.dispatchEvent(new Event('click'))
        vm.$children[0].$nextTick(()=>{
          expect(items[0].parentElement.className).to.equal('')
          resolve()
        })
      }))
  })

  it('disabled', () => {
    const menuItems = [
      { name: 'Home', text: 'Home', disabled: true },
      { name: 'Orders', text: 'Orders' },
      { name: 'Blogs', text: 'Blogs', children: [
        { name: 'blogs-1', text: 'blogs-1'},
        { name: 'blogs-2', text: 'blogs-2'}
      ] }
    ]
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => {
        return <div>
          <Menu
            items={menuItems}
          >
          </Menu>
        </div>
      }
    })
    let items = [].slice.call(vm.$el.querySelectorAll('*:not(li)>.i-menu>ul>li>a'))
    return Promise.resolve()
      .then(()=>new Promise((resolve, reject)=>{
        items[0].parentElement.dispatchEvent(new Event('click'))
        vm.$children[0].$nextTick(()=>{
          expect(items[0].parentElement.className).to.equal('disabled')
          resolve()
        })
      }))
  })
})
