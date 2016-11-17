<template>
  <div>
    <h3>Button</h3>

    <i-card>
      <h5 slot='header'>type</h5>
      <i-btn html-type='submit'>default</i-btn>
      <i-btn type='basic'>basic</i-btn>
      <i-btn type='text'>text</i-btn>
    </i-card>

    <i-card>
      <h5 slot='header'>radius</h5>
      <i-btn radius='circle' size='large'>Yes</i-btn>
      <i-btn radius='circle'>No</i-btn>
      <i-btn radius='circle' size='small'>no</i-btn>
      <i-btn>default</i-btn>
      <i-btn radius='vertical'>vertical</i-btn>
    </i-card>

    <i-card>
      <h5 slot='header'>size</h5>
      <i-btn size='large'>large</i-btn>
      <i-btn>default</i-btn>
      <i-btn size='small'>small</i-btn>
    </i-card>

    <i-card>
      <h5 slot='header'>state</h5>
      <i-btn loading>loading</i-btn>
      <i-btn loading type='basic'>loading</i-btn>
      <i-btn loading type='text'>loading</i-btn>
      <br/><br/>
      <i-btn disabled>disabled</i-btn>
      <i-btn disabled type='basic'>disabled</i-btn>
      <i-btn disabled type='text'>disabled</i-btn>
    </i-card>

    <i-card>
      <h5 slot='header'>display</h5>
      <i-btn display='block'>block</i-btn>
      <br/>
      <i-btn display='left'>left</i-btn>
      <i-btn display='right'>right</i-btn>
      <div style='clear:both;'></div>
    </i-card>

    <h3>Button Group</h3>

    <i-card>
      <h5 slot='header'>default</h5>
      <i-btn-grp>
        <i-btn>foo</i-btn>
        <i-btn>bar</i-btn>
        <i-btn>bar</i-btn>
      </i-btn-grp>
      <br/><br/>
      <i-btn-grp>
        <i-btn type='basic'>foo</i-btn>
        <i-btn type='basic'>bar</i-btn>
        <i-btn type='basic'>bar</i-btn>
      </i-btn-grp>
      <br/><br/>
      <i-btn-grp>
        <i-btn type='text'>foo</i-btn>
        <i-btn type='text'>bar</i-btn>
        <i-btn type='text'>bar</i-btn>
      </i-btn-grp>
    </i-card>

    <i-card>
      <h5 slot='header'>Vertical</h5>
      <i-btn-grp type='vertical'>
        <i-btn>foo</i-btn>
        <i-btn>bar</i-btn>
        <i-btn>bar</i-btn>
      </i-btn-grp>
      <i-btn-grp type='vertical'>
        <i-btn type='basic'>foo</i-btn>
        <i-btn type='basic'>bar</i-btn>
        <i-btn type='basic'>bar</i-btn>
      </i-btn-grp>
      <i-btn-grp type='vertical'>
        <i-btn type='text'>foo</i-btn>
        <i-btn type='text'>bar</i-btn>
        <i-btn type='text'>bar</i-btn>
      </i-btn-grp>
    </i-card>
  </div>
</template>

<script>
export default {
  components: {
  }
}
</script>
