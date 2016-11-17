<template>
  <div>
    <h3>Menu</h3>

    <i-card>
      <h5 slot='header'>Basic Menu</h5>
      <i-menu
        :items='basicItems'
      >
      </i-menu>
      <br/><br/><br/>
    </i-card>

    <i-card>
      <h5 slot='header'>Multi-Level Menu</h5>
      <i-menu
        :items='multiItems'
      >
      </i-menu>
      <br/><br/><br/>
    </i-card>

    <i-card style='width: 200px;'>
      <h5 slot='header'>Vertical Menu</h5>
      <i-menu
        type='vertical'
        :items='basicItems'
      >
      </i-menu>
      <br/><br/><br/>
    </i-card>
  
    <i-card style='width: 200px;'>
      <h5 slot='header'>Multi-Level Vertical Menu</h5>
      <i-menu
        type='vertical'
        :items='multiItems'
      >
      </i-menu>
      <br/><br/><br/>
    </i-card>
  </div>
</template>

<script>
export default {
  data(){
    return {
      basicItems: [
        { name: 'Home', text: 'Home' },
        { name: 'Orders', text: 'Orders' },
        { name: 'Blogs', text: 'Blogs' },
      ],
      multiItems: [
        { name: 'Home', text: 'Home' },
        { name: 'Orders', text: 'Orders', children: [
          { name: 'Cart', text: 'Cart' },
          { name: 'Payment', text: 'Payment' },
          { name: 'History', text: 'History' },
        ] },
        { name: 'Blogs', text: 'Blogs', children: [
          { name: 'Technology', text: 'Technology' },
          { name: 'Life', text: 'Life' },
          { name: 'Talk', text: 'Talk' },
        ] },
      ],
    }
  },
  components: {
  }
}
</script>
