<template>
  <div>
    <h3>Grid</h3>
    
    <i-card class='demo-grid'>
      <h5 slot='header'>12 columns</h5>
      <i-row wrapper>
        <i-col :xs='1'>1</i-col>
        <i-col :xs='1'>1</i-col>
        <i-col :xs='1'>1</i-col>
        <i-col :xs='1'>1</i-col>
        <i-col :xs='1'>1</i-col>
        <i-col :xs='1'>1</i-col>
        <i-col :xs='1'>1</i-col>
        <i-col :xs='1'>1</i-col>
        <i-col :xs='1'>1</i-col>
        <i-col :xs='1'>1</i-col>
        <i-col :xs='1'>1</i-col>
        <i-col :xs='1'>1</i-col>
      </i-row>
      <i-row wrapper>
        <i-col :xs='8'>8</i-col>
        <i-col :xs='4'>4</i-col>
      </i-row>
      <i-row wrapper>
        <i-col :xs='4'>4</i-col>
        <i-col :xs='4'>4</i-col>
        <i-col :xs='4'>4</i-col>
      </i-row>
      <i-row wrapper>
        <i-col :xs='6'>6</i-col>
        <i-col :xs='6'>6</i-col>
      </i-row>
      <i-row wrapper>
        <i-col :xs='6' :xs-offset='3'>6 offset-3</i-col>
        <i-col :xs='3'>3</i-col>
      </i-row>
    </i-card>

    <i-card class='demo-grid'>
      <h5 slot='header'>responsive</h5>
      <i-row wrapper>
        <i-col :xs='12' :sm='6' :md='3' :lg='1'>xs=12 sm=6 md=3 lg=1</i-col>
        <i-col :xs='12' :sm='6' :md='3' :lg='1'>xs=12 sm=6 md=3 lg=1</i-col>
        <i-col :xs='12' :sm='6' :md='3' :lg='1'>xs=12 sm=6 md=3 lg=1</i-col>
        <i-col :xs='12' :sm='6' :md='3' :lg='1'>xs=12 sm=6 md=3 lg=1</i-col>
        <i-col :xs='12' :sm='6' :md='3' :lg='1'>xs=12 sm=6 md=3 lg=1</i-col>
        <i-col :xs='12' :sm='6' :md='3' :lg='1'>xs=12 sm=6 md=3 lg=1</i-col>
        <i-col :xs='12' :sm='6' :md='3' :lg='1'>xs=12 sm=6 md=3 lg=1</i-col>
        <i-col :xs='12' :sm='6' :md='3' :lg='1'>xs=12 sm=6 md=3 lg=1</i-col>
        <i-col :xs='12' :sm='6' :md='3' :lg='1'>xs=12 sm=6 md=3 lg=1</i-col>
        <i-col :xs='12' :sm='6' :md='3' :lg='1'>xs=12 sm=6 md=3 lg=1</i-col>
        <i-col :xs='12' :sm='6' :md='3' :lg='1'>xs=12 sm=6 md=3 lg=1</i-col>
        <i-col :xs='12' :sm='6' :md='3' :lg='1'>xs=12 sm=6 md=3 lg=1</i-col>
      </i-row>
    </i-card>
  </div>
</template>

<script>
export default {
  components: {
  }
}
</script>
