<template>
  <div>
    <h3>Tab</h3>

    <i-card>
      <h5 slot='header'>Basic Tab</h5>
      <i-tab
        :items='[
          { name: "first", text: "First item" },
          { name: "second", text: "Second item" },
          { name: "third", text: "Third item" },
        ]'
      >
        <div slot='first'>
          the first content
        </div>
        <div slot='second'>
          the second content
        </div>
        <div slot='third'>
          the third content
        </div>
      </i-tab>
    </i-card>

    <i-card>
      <h5 slot='header'>Card Tab</h5>
      <i-tab
        type='card'
        :items='[
          { name: "first", text: "First item" },
          { name: "second", text: "Second item" },
          { name: "third", text: "Third item" },
        ]'
      >
        <div slot='first'>
          the first content
        </div>
        <div slot='second'>
          the second content
        </div>
        <div slot='third'>
          the third content
        </div>
      </i-tab>
    </i-card>

    <i-card>
      <h5 slot='header'>Justified Tab</h5>
      <i-tab
        justified
        :items='[
          { name: "first", text: "First item" },
          { name: "second", text: "Second item" },
          { name: "third", text: "Third item" },
        ]'
      >
        <div slot='first'>
          the first content
        </div>
        <div slot='second'>
          the second content
        </div>
        <div slot='third'>
          the third content
        </div>
      </i-tab>
    </i-card>
  </div>
</template>

<script>
export default {
  components: {
  }
}
</script>
