<template>
  <div>
    <h3>Modal</h3>

    <i-card>
      <h5 slot='header'>Basic modal</h5>
      <i-btn @click.native='open("openBasic")'>Open</i-btn>
      <i-modal v-model='openBasic'>
        <div slot='header'><h1>modal header</h1></div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Doloremque aut nobis beatae, ullam mollitia aspernatur dolores?
            Officia a tempora, soluta.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Doloremque aut nobis beatae, ullam mollitia aspernatur dolores?
            Officia a tempora, soluta.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Doloremque aut nobis beatae, ullam mollitia aspernatur dolores?
            Officia a tempora, soluta.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Doloremque aut nobis beatae, ullam mollitia aspernatur dolores?
            Officia a tempora, soluta.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Doloremque aut nobis beatae, ullam mollitia aspernatur dolores?
            Officia a tempora, soluta.
          </p>
        </div>
        <div slot='footer'>this is footer</div>
      </i-modal>
    </i-card>

    <i-card>
      <h5 slot='header'>Confirm modal</h5>
      <i-btn @click.native='open("openConfirm")'>Open</i-btn>
      <i-modal v-model='openConfirm' width='300px' :closeable='false'>
        <div slot='header'><h4 style='margin:0;'>Delete Confirm</h4></div>
        <div style='text-align:center;'>
          <p>
            <b>Are you sure?</b><br/>
            This action will permanently delete this package.
          </p>
          <div style='text-align: right;'>
            <i-btn @click.native='open("openConfirm")'>Yes</i-btn>
            <i-btn @click.native='open("openConfirm")' type='basic'>No</i-btn>
          </div>
        </div>
      </i-modal>
    </i-card>
  </div>
</template>

<script>
export default {
  data(){
    return {
      openBasic: false,
      openConfirm: false,
    }
  },
  methods: {
    open(name){
      this[name] = !this[name]
    }
  },
  components: {
  }
}
</script>
