<template>
  <div>
    <h3>Collapse</h3>

    <i-card>
      <h5 slot='header'>Basic Collapse</h5>
      <i-collapse
        :items='[
          { name: "first", text: "First item" },
          { name: "second", text: "Second item" },
          { name: "third", text: "Third item" },
        ]'
      >
        <div slot='first'>
          Lorem ipsum dolor sit amet.
        </div>
        <div slot='second'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptatem.
        </div>
        <div slot='third'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Praesentium reiciendis, ullam tempora molestiae commodi, in labore mollitia nesciunt est tenetur.
        </div>
      </i-collapse>
    </i-card>

    <i-card>
      <h5 slot='header'>Multiple Collapse</h5>
      <i-collapse
        multiple
        :items='[
          { name: "first", text: "First item" },
          { name: "second", text: "Second item" },
          { name: "third", text: "Third item" },
        ]'
      >
        <div slot='first'>
          Lorem ipsum dolor sit amet.
        </div>
        <div slot='second'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptatem.
        </div>
        <div slot='third'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Praesentium reiciendis, ullam tempora molestiae commodi,
          in labore mollitia nesciunt est tenetur.
        </div>
      </i-collapse>
    </i-card>
  </div>
</template>

<script>
export default {
  data(){
    return {
    }
  },
  methods: {
  },
  components: {
  }
}
</script>
