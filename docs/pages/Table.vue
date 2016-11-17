<template>
  <div>
    <h3>Table</h3>

    <i-card>
      <h5 slot='header'>Basic Table</h5>
      <i-table
        row-key='id'
        :default-open-rows='[0]'
        :data='demoData'
        :columns='demoColumns'
      >
      </i-table>
    </i-card>

    <i-card>
      <h5 slot='header'>No Data and Loading Table</h5>
      <i-table
        bordered
        row-key='id'
        :data='[]'
        :columns='demoColumns'
      >
        custom no data message
      </i-table>
      <br/>
      <i-table
        bordered
        loading
        row-key='id'
        :data='[]'
        :columns='demoColumns'
      >
      </i-table>
    </i-card>

    <i-card>
      <h5 slot='header'>Hidden Header Table</h5>
      <i-table
        hidden-header
        row-key='id'
        :data='demoData'
        :columns='demoColumns'
      >
      </i-table>
    </i-card>

    <i-card>
      <h5 slot='header'>Bordered Table</h5>
      <i-table
        bordered
        row-key='id'
        :data='demoData'
        :columns='demoColumns'
      >
      </i-table>
    </i-card>

    <i-card>
      <h5 slot='header'>Fixed Header Table</h5>
      <i-table
        row-key='id'
        height='190px'
        :data='demoData'
        :columns='demoColumns'
      >
      </i-table>
    </i-card>

    <i-card>
      <h5 slot='header'>Row Click Table</h5>
      <p><b>clicked:</b> {{clickedRow}}</p>
      <i-table
        row-key='id'
        :data='demoData'
        :columns='demoColumns'
        @row-click='onClickRow'
      >
      </i-table>
    </i-card>

    <i-card>
      <h5 slot='header'>Selectable Table</h5>
      <p><b>selected:</b> {{selectedRow}}</p>
      <i-table
        bordered
        selectable
        row-key='id'
        height='300px'
        :data='demoData'
        :columns='demoColumns'
        @selected-change='onSelectRow'
      >
      </i-table>
    </i-card>
  </div>
</template>

<script>
const demoData = [
  { id: 0, name: 'LiYi', sex: 'M', age: 36, language: ['zh-cn', 'es-bo'],
    type:'one', percent: 58, remember: 'I', introduction: 'wa ha ha',
    children: [
      { id: 10, name: 'LiYi-ChEr', sex: 'F', age: 25, language: ['zh-cn', 'fr-fr'],
        type:'two', percent: 72, remember: 'I', introduction: 'ya ga ga' },
      { id: 20, name: 'LiYi-ZhSa', sex: 'M', age: 17, language: ['zh-cn', 'ja-jp'],
        type:'two', percent: 68, remember: 'O', introduction: 'ha ya ya' },
      { id: 30, name: 'LiYi-LiSi', sex: 'F', age: 21, language: ['zh-cn', 'en-us'],
        type:'two', percent: 16, remember: 'I', introduction: 'yo ho ho' },
    ]
  },
  { id: 1, name: 'ChEr', sex: 'F', age: 25, language: ['zh-cn', 'fr-fr'],
    type:'two', percent: 72, remember: 'I', introduction: 'ya ga ga' },
  { id: 2, name: 'ZhSa', sex: 'M', age: 17, language: ['zh-cn', 'ja-jp'],
    type:'two', percent: 68, remember: 'O', introduction: 'ha ya ya' },
  { id: 3, name: 'LiSi', sex: 'F', age: 21, language: ['zh-cn', 'en-us'],
    type:'two', percent: 16, remember: 'I', introduction: 'yo ho ho' },
  { id: 4, name: 'WaWu', sex: 'F', age: 13, language: ['zh-cn', 'en_au'],
    type:'one', percent: 95, remember: 'O', introduction: 'ba la la' },
  { id: 5, name: 'ZhLi', sex: 'M', age: 11, language: ['zh-cn', 'en-ca'],
    type:'one', percent: 29, remember: 'I', introduction: 'oh he he' },
  { id: 6, name: 'SuQi', sex: 'F', age: 19, language: ['zh-cn', 'en-gb'],
    type:'two', percent: 32, remember: 'O', introduction: 'en ao ao' },
  { id: 7, name: 'ZhBa', sex: 'F', age: 12, language: ['zh-cn', 'en-ie'],
    type:'one', percent: 79, remember: 'I', introduction: 'jo na na' },
  { id: 8, name: 'WuJi', sex: 'M', age: 22, language: ['zh-cn', 'en-nz'],
    type:'two', percent: 55, remember: 'O', introduction: 'lo pa pa' },
  { id: 9, name: 'ZhSh', sex: 'F', age: 20, language: ['zh-cn', 'en-za'],
    type:'one', percent: 60, remember: 'O', introduction: 'ko ta ta' },
]
const demoColumns = [{
  name: 'id',
  text: 'Id',
  className: 'center',
}, {
  name: 'name',
  text: 'Name',
}, {
  name: 'language',
  text: 'Language',
}, {
  name: 'type',
  text: 'Type',
}, {
  name: 'percent',
  text: 'Percent',
}, {
  name: 'remember',
  text: 'Remember',
  className: 'right',
  render(h){
    let ts = { I: 'Yes', O: 'No'}
    return (
      <span style='font-weight: bold;'>{ts[this.col]}</span>
    )
  }
}, {
  name: 'introduction',
  text: 'Introduction',
}, {
  name: '',
  text: 'operations',
  className: 'right',
  width: '92px',
  render(h){
    return (
      <div>
        <i-btn-grp>
          <i-btn type='basic' size='small'>Edit</i-btn>
          <i-btn type='basic' size='small'>Del</i-btn>
        </i-btn-grp>
      </div>
    )
  }
}]
export default {
  data(){
    return {
      demoData,
      demoColumns,
      clickedRow: null,
      selectedRow: [],
    }
  },
  methods: {
    onClickRow(row, index){
      this.clickedRow = row
    },
    onSelectRow(rows){
      this.selectedRow = rows
    },
  },
  components: {
  }
}
</script>
