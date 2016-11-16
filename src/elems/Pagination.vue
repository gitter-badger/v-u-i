<template>
  <div class='i-pagination'>
    <ul>
      <li
        v-if='changeMorePage>0'
        class='prev more'
        :class='{ "disabled": nowPage<=1 }'
        @click='changePage(nowPage - changeMorePage)'
      >
        &lt;&lt;
      </li>
      <li
        class='prev'
        :class='{ "disabled": nowPage<=1 }'
        @click='changePage(nowPage - 1)'
      >
        &lt;
      </li>
      <li
        v-for='now in pageBtnArray'
        :class='{ "active": now==nowPage }'
        @click='changePage(now)'
      >
        {{now}}
      </li>
      <li
        class='next'
        :class='{ "disabled": nowPage>=totalPage }'
        @click='changePage(nowPage + 1)'
      >
        &gt;
      </li>
      <li
        v-if='changeMorePage>0'
        class='next more'
        :class='{ "disabled": nowPage>=totalPage }'
        @click='changePage(nowPage + changeMorePage)'
      >
        &gt;&gt;
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'IPagination',
  props: {
    type: { type: String },
    total: { type: Number, default: 0 },
    page: { type: Number, default: 0 },
    size: { type: Number, default: 10 },
    changeMorePage: { type: Number, default: 0 },
    btnTotal: { type: Number, default: 9 },
  },
  data(){
    let totalPage = parseInt(this.total / this.size) + (this.total % this.size == 0 ? 0 : 1)
    let nowPage = Math.min(totalPage, Math.max(0, this.page))
    let btnCount = this.btnTotal
    if(this.type == 'simple'){
      btnCount = 1
    }else if(this.type == 'small'){
      btnCount = 5
    }
    return {
      totalPage,
      nowPage,
      btnCount,
    }
  },
  computed: {
    pageBtnArray(){
      // btn count
      let btnCount = Math.min(this.totalPage, this.btnCount)
      // overflow count
      let btnOverflow = this.nowPage + parseInt(btnCount/2) - this.totalPage
      btnOverflow = btnOverflow >= 0 ? btnOverflow : 0
      // start number
      let startNumber = Math.max(1, this.nowPage - parseInt(btnCount/2) - btnOverflow)
      // result
      let result = []
      for(let i=0; i<btnCount; i++){
        result.push(startNumber + i)
      }
      return result
    },
  },
  methods: {
    changePage(pageNumber){
      if(this.nowPage == pageNumber){
        return
      }
      this.nowPage = Math.min(this.totalPage, Math.max(1, pageNumber))
    },
  },
  watch: {
    nowPage(){
      this.$emit('page-change', this.nowPage)
    },
  },
}
</script>
