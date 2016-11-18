import Vue from 'vue'
import Table from '../../../src/elems/Table'

describe('Table.vue', () => {

  it('nodata msg', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => {
        return <Table>
          custom no data msg
        </Table>
      }
    })
    expect(vm.$el.querySelector('tbody>tr>td').textContent.trim()).to.equal('custom no data msg')
  })

  it('basic', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => {
        return <Table
          columns={[
            { name: 'one', text: 'column one' },
            { name: 'two', text: 'column two' },
            { name: 'three', text: 'column three' }
          ]}
          data={[
            { one:1, two: 2, three: 3 },
            { one:4, two: 5, three: 6 }
          ]}
        >
          custom no data msg
        </Table>
      }
    })
    let ths = [].slice.call(vm.$el.querySelectorAll('thead>tr>th'))
    expect(ths.length).to.equal(3)
    let trs = [].slice.call(vm.$el.querySelectorAll('tbody>tr'))
    expect(trs.length).to.equal(2)
  })

  it('adv', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => {
        return <Table
          selectable
          on-row-click={(row, rowIndex, parentRow, parentRowIndex)=>{
            expect(row).to.deep.equal({one: 7, two: 8, three: 9})
            expect(rowIndex).to.equal(0)
            expect(parentRowIndex).to.equal(1)
          }}
          columns={[
            { name: 'one', text: 'column one' },
            { name: 'two', text: 'column two' },
            { name: 'three', text: 'column three' }
          ]}
          data={[
            { one:1, two: 2, three: 3 },
            { one:4, two: 5, three: 6, children: [
              { one: 7, two: 8, three: 9}
            ] }
          ]}
        >
          custom no data msg
        </Table>
      }
    })
    vm.$el.querySelector('tbody>tr:last-child').dispatchEvent(new Event('click'))
    let ths = [].slice.call(vm.$el.querySelectorAll('thead>tr>th'))
    expect(ths.length).to.equal(5)
    let selectAll = vm.$el.querySelector('thead>tr>th:first-child input')
    return Promise.resolve()
      .then(()=>new Promise((resolve, reject)=>{
        selectAll.checked = true
        selectAll.dispatchEvent(new Event('change'))
        vm.$children[0].$nextTick(()=>{
          expect(vm.$children[0].selectedAll).to.be.true
          expect(vm.$children[0].iptValue).to.eql([0, 1, '1:0'])
          resolve()
        })
      }))
      .then(()=>new Promise((resolve, reject)=>{
        selectAll.checked = false
        selectAll.dispatchEvent(new Event('change'))
        vm.$children[0].$nextTick(()=>{
          expect(vm.$children[0].iptValue.length).to.equal(0)
          resolve()
        })
      }))
  })

  it('rowKey', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => {
        return <Table
          height='10px'
          selectable
          rowKey='one'
          defaultOpenRows={[4]}
          columns={[
            { name: 'one', text: 'column one' },
            { name: 'two', text: 'column two' },
            { name: 'three', text: 'column three', render(h){
              return <span class='test-render'>this.col</span>
            } }
          ]}
          data={[
            { one:1, two: 2, three: 3 },
            { one:4, two: 5, three: 6, children: [
              { one: 7, two: 8, three: 9, }
            ] }
          ]}
        >
          custom no data msg
        </Table>
      }
    })
    let selectAll = vm.$el.querySelector('thead>tr>th:first-child input')
    let children = vm.$el.querySelector('tbody>tr:nth-child(2) .children-selector')
    expect(vm.$el.querySelectorAll('tr.opened').length).to.equal(1)
    expect(vm.$el.querySelectorAll('.test-render').length).to.equal(3)
    return Promise.resolve()
      .then(()=>new Promise((resolve, reject)=>{
        selectAll.checked = true
        selectAll.dispatchEvent(new Event('change'))
        vm.$children[0].$nextTick(()=>{
          expect(vm.$children[0].iptValue).to.eql([1, 4, 7])
          resolve()
        })
      }))
      .then(()=>new Promise((resolve, reject)=>{
        children.dispatchEvent(new Event('click'))
        vm.$children[0].$nextTick(()=>{
          expect(vm.$el.querySelectorAll('tr.opened').length).to.equal(0)
          resolve()
        })
      }))
      .then(()=>new Promise((resolve, reject)=>{
        children.dispatchEvent(new Event('click'))
        vm.$children[0].$nextTick(()=>{
          expect(vm.$children[0].openedRows).to.eql([4])
          resolve()
        })
      }))
      .then(()=>new Promise((resolve, reject)=>{
        vm.$el.scrollTop = 0
        vm.$el.dispatchEvent(new Event('scroll'))
        vm.$children[0].$nextTick(()=>{
          expect(vm.$children[0].fixHeaderScroll).to.equal('0px')
          resolve()
        })
      }))
  })

})
