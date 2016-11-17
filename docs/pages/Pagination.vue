<template>
  <div>
    <h3>Pagination</h3>

    <i-card>
      <h5 slot='header'>Basic Pagination</h5>
      <i-pagination
        :total='1320'
        :size='100'
        :page='2'
      >
      </i-pagination>
    </i-card>

    <i-card>
      <h5 slot='header'>simple Pagination</h5>
      <i-pagination
        type='simple'
        :total='1320'
        :size='100'
        :page='2'
      >
      </i-pagination>
    </i-card>

    <i-card>
      <h5 slot='header'>small Pagination</h5>
      <i-pagination
        type='small'
        :total='1320'
        :size='100'
        :page='2'
      >
      </i-pagination>
    </i-card>

    <i-card>
      <h5 slot='header'>no records</h5>
      <i-pagination
        :total='0'
        :size='20'
        :page='0'
      >
      </i-pagination>
    </i-card>

    <i-card>
      <h5 slot='header'>less records</h5>
      <i-pagination
        :total='10'
        :size='10'
        :page='1'
      >
      </i-pagination>
      <i-pagination
        :total='20'
        :size='10'
        :page='1'
      >
      </i-pagination>
      <i-pagination
        :total='30'
        :size='10'
        :page='1'
      >
      </i-pagination>
      <i-pagination
        :total='40'
        :size='10'
        :page='1'
      >
      </i-pagination>
    </i-card>

    <i-card>
      <h5 slot='header'>more records</h5>
      <i-pagination
        :change-more-page='5'
        :total='1321'
        :size='20'
        :page='2'
      >
      </i-pagination>
    </i-card>
  </div>
</template>

<script>
export default {
  components: {
  }
}
</script>
