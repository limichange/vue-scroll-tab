<template>
  <div
    class="ScrollTabItem"
    @click="click">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ScrollTabItem',
  props: {
    index: {
      type: Number,
      default: 0
    }
  },
  methods: {
    click () {
      this.$parent.active(this.index)
    }
  }
}
</script>
