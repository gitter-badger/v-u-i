<template>
  <div>
    <div class='vui-docs-wrapper' ref='wrapper'>
      <i-menu
        v-model='pageLink'
        :items='[
          { name: "/readme", text: "V-U-I Docs" },
          { name: "title-1", text: "Basic Elements", disabled: true, className: "vui-docs-menu-title" },
          { name: "/grid", text: "Grid" },
          { name: "/button", text: "Button" },
          { name: "/form", text: "Form" },
          { name: "/table", text: "Table" },
          { name: "/pagination", text: "Pagination" },
          { name: "title-2", text: "Components", disabled: true, className: "vui-docs-menu-title" },
          { name: "/card", text: "Card" },
          { name: "/modal", text: "Modal" },
          { name: "/collapse", text: "Collapse" },
          { name: "/tabs", text: "Tab" },
          { name: "/popup", text: "Popup" },
          { name: "/menu", text: "Menu" },
          { name: "/message", text: "$message" },
        ]'
      >
      </i-menu>
      <router-view></router-view>
    </div>
    <pre class='vui-docs-code hljs' ref='code'><code v-html='source'></code></pre>
  </div>
</template>

<script>
import hljs from 'highlight.js'

export default {
  data(){
    return {
      pageLink: this.$route.path,
      source: ''
    }
  },
  methods: {
    fetchSource(){
      if(!this.$route.meta.source){
        return
      }
      this.$http.get(`./docs/pages/${this.$route.meta.source}.vue`)
      .then(
        (res) => res.body,
        (res) => this.source = '<h3>No Source Code</h3>'
      )
      .then((sourceCode)=>{
        if(typeof(sourceCode)==='string'){
          this.source = hljs.highlightAuto(sourceCode, ['html']).value
        }else{
          let reader = new FileReader()
          reader.onload = ()=>{
            this.source = hljs.highlightAuto(reader.result, ['html']).value
          }
          reader.readAsText(sourceCode)
        }

      })
    }
  },
  mounted(){
    this.fetchSource(this.$route.path)
    if(window.ga){
      window.ga('send', 'pageview', this.$route.path)
    }
  },
  watch: {
    pageLink(){
      this.$router.push({ path: this.pageLink })
      this.$refs.wrapper.scrollTop = 0
      this.$refs.code.scrollTop = 0
      this.fetchSource(this.pageLink)
      if(window.ga){
        window.ga('set', 'page', this.pageLink)
        window.ga('send', 'pageview', this.pageLink)
      }
    }
  },
  components: {
  }
}
</script>

<style lang='less'>
  @import "~v-u-i/src/less/index";
  @import "~highlight.js/styles/atom-one-dark.css";

  @rootDimmer: rgba(255, 255, 255, .2);
  @rootBackground: rgba(35, 65, 80, 1);
  @rootTextColor: rgba(255, 255, 255, 1);
  @rootPrimaryColor: rgba(85, 205, 218, 1);
  @rootSecondColor: rgba(85, 130, 150, 1);
  @rootSuccessColor: rgba(100, 150, 50, 1);
  @rootErrorColor: rgba(255, 77, 92, 1);
  @rootInfoColor: rgba(55, 188, 255, 1);
  @rootWarningColor: rgba(255, 136, 73, 1);

  body {
    background-color: fade(@rootBackground, 85%);
  }

  .vui-docs-wrapper,
  .vui-docs-code{
    top: 0;
    right: 0;
    margin: 0;
    position: fixed;
    width: 50%;
    overflow: auto;
    height: 100%;
  }

  .vui-docs-wrapper{
    left: 0;
    &>.i-menu > ul > li.vui-docs-menu-title{
      width: 100%;
      border-top: 1px solid rgba(0,0,0, .15);
      opacity: .4;
    }
    &>div:not(.i-menu){
      padding: 0 30px;
      &>h3{
        margin: 30px 0;
      }
      &>.i-card{
        margin: 15px;
        border-width: 0;
        &>.header{
          padding: 0;
        }
        &>.content{
          padding: 15px;
        }
        &.demo-grid>.content>.i-row>.i-col{
          text-align: center;
          border-style: solid;
          border-width: 1px;
        }
      }
    }
  }
</style>
