<template>
  <div
    class='i-table'
    :class='{
      "hidden-header": hiddenHeader,
      "bordered": bordered,
      "loading": loading,
      "fixed-header": height
    }'
    :style='{ height: height }'
    @scroll='onFixheaderScroll'
  >
    <div class='loader'></div>
    <table>
      <thead v-if='!hiddenHeader'>
        <tr>
          <th v-if='selectable' class='selector'>
            <div :style='{ top: fixHeaderScroll }'>
              <div class='row-selector'>
                <div class='selector'>
                  <input type='checkbox'
                    :checked='selectedAll'
                    @change='onToggleAllSelect'
                  />
                  <div class='checker'></div>
                </div>
              </div>
            </div>
          </th>
          <th v-if='hasChildren' class='selector'>
            <div :style='{ top: fixHeaderScroll }'>&nbsp;</div>
          </th>
          <th
            v-for='(column, colIndex) in columns' :key='colIndex'
            :class='column.className'
            :style='{ width: column.width }'
          >
            <div :style='{ top: fixHeaderScroll }'>
              {{column.text}}
            </div>
          </th>
        </tr>
      </thead>
      <tbody v-if='data.length'>
        <template v-for='(row, rowIndex) in data'>
          <tr @click='onRowClick(row, rowIndex)' :key='rowIndex'>
            <td v-if='selectable' class='selector'>
              <div class='row-selector'>
                <div class='selector'>
                  <input type='checkbox' v-model='iptValue' :value='rowKey ? row[rowKey] : rowIndex' />
                  <div class='checker'></div>
                </div>
              </div>
            </td>
            <td v-if='hasChildren' class='selector'>
              <template v-if='row.children && row.children.length'>
                <div
                  v-if='openedRows.indexOf(rowKey ? row[rowKey] : rowIndex)>-1'
                  class='children-selector opened'
                  @click.prevent.stop='toggleChildren("close", rowKey ? row[rowKey] : rowIndex)'
                >
                </div>
                <div
                  v-else
                  class='children-selector'
                  @click.prevent.stop='toggleChildren("open", rowKey ? row[rowKey] : rowIndex)'
                >
                </div>
              </template>
            </td>
            <cell-render
              v-for='(column, colIndex) in columns'
              :class='column.className'
              :column='column'
              :col='row[column.name]'
              :col-index='colIndex'
              :row='row'
              :row-index='rowIndex'
              :style='{ width: rowIndex==0 && hiddenHeader ? column.width : undefined }'
            >
            </cell-render>
          </tr>
          <tr
            v-if='row.children'
            class='children'
            :class='{ "opened": openedRows.indexOf(rowKey ? row[rowKey] : rowIndex)>-1 }'
            v-for='(childRow, childRowIndex) in row.children' :key='rowKey ? childRow[rowKey] : (rowIndex + ":" + childRowIndex)'
            @click='onRowClick(childRow, childRowIndex, row, rowIndex)'
          >
            <td v-if='selectable' class='selector'>
              <div class='row-selector'>
                <div class='selector'>
                  <input type='checkbox' v-model='iptValue' :value='rowKey ? childRow[rowKey] : (rowIndex + ":" + childRowIndex)' />
                  <div class='checker'></div>
                </div>
              </div>
            </td>
            <td v-if='hasChildren' class='selector'></td>
            <cell-render
              v-for='(childColumn, childColIndex) in columns'
              :class='childColumn.className'
              :column='childColumn'
              :col='childRow[childColumn.name]'
              :col-index='childColIndex'
              :row='childRow'
              :row-index='childRowIndex'
              :parent-row='row'
              :parent-row-index='rowIndex'
            >
            </cell-render>
          </tr>
        </template>
      </tbody>
      <tbody v-else>
        <tr>
          <td
            class='center'
            :colspan='columns.length + (selectable ? 1:0) + (hasChildren ? 1:0)'
          >
            <slot>No data available in table</slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { throttle } from '../utils/funcUtil'

let CellRender = {
  props: {
    column: { type: Object, required: true },
    col: { },
    colIndex: { type: Number },
    row: { type: Object },
    rowIndex: { type: Number },
    parentRow: { type: Object },
    parentRowIndex: { type: Number },
  },
  render(createElement){
    return createElement('td', {
      key: this.colIndex,
    },[
      typeof(this.column.render)==='function'
        ? this.column.render.call(this, createElement)
        : this.col
    ])
  }
}

export default {
  name: 'ITable',
  props: {
    data: { type: Array, default: ()=>{return []} },
    columns: { type: Array, default: ()=>{return []} },
    defaultSelectRows: { type: Array, default: ()=>{return []} },
    defaultOpenRows: { type: Array, default: ()=>{return []} },
    rowKey: { type: String },
    hiddenHeader: { type: Boolean },
    bordered: { type: Boolean },
    height: { type: String },
    selectable: { type: Boolean },
    loading: { type: Boolean },
  },
  data(){
    return {
      iptValue: [].concat(this.defaultSelectRows),
      hasChildren: this.data.filter((i)=>!!i.children).length > 0,
      openedRows: [].concat(this.defaultOpenRows),
      fixHeaderScroll: 0,
    }
  },
  computed: {
    selectedAll(){
      return this.iptValue.length &&
        this.iptValue.length == this.data.length +
        this.data.map((i)=>i.children ? i.children.length : 0)
        .reduce((s, i)=>i+s, 0)
    },
  },
  methods: {
    onFixheaderScroll: throttle(function(e){
      this.fixHeaderScroll = e.target.scrollTop + 'px'
    }, 10),
    onToggleAllSelect(e){
      if(e.target.checked){
        this.iptValue = this.data.reduce((res, d, i)=>{
          let keys = []
          if(this.rowKey){
            keys.push(d[this.rowKey])
            if(d.children){
              keys = keys.concat(d.children.map((c, ci)=>c[this.rowKey]))
            }
          }else{
            keys.push(i)
            if(d.children){
              keys = keys.concat(d.children.map((c, ci)=>i + ':' + ci))
            }
          }
          return res.concat(keys)
        }, [])
      }else{
        this.iptValue = []
      }
    },
    onRowClick(row, rowIndex, parentRow, parentRowIndex){
      this.$emit('row-click', row, rowIndex, parentRow, parentRowIndex)
    },
    toggleChildren(option, rowKey){
      if(option=='open'){
        this.openedRows.push(rowKey)
      }else{
        this.openedRows = this.openedRows.filter((i)=>i!==rowKey)
      }
    },
  },
  watch: {
    iptValue(){
      this.$emit('selected-change', this.iptValue)
    },
  },
  components: {
    'cellRender': CellRender
  },
}
</script>
