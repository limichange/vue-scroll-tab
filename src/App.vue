<template>
  <div :class="$style.App">
    <div :class="$style.ScrollTab">
      <ScrollTab ref="ScrollTab">
        <div
          v-for="(item, index) in testData"
          :key="index"
          :class="$style.item">
          DIV {{ index }}
        </div>
      </ScrollTab>
    </div>

    <button @click="click">Add div</button>
    <button @click="active(5)">Active 5</button>
    <button @click="active(10)">Active 10</button>
    <button @click="active(15)">Active 15</button>
    <button @click="fixWidth">fixWidth</button>
  </div>
</template>

<script>
import ScrollTab from './components/ScrollTab'

export default {
  name: 'App',
  components: {
    ScrollTab
  },
  data () {
    return {
      testData: new Array(20)
    }
  },
  methods: {
    fixWidth () {
      this.$refs.ScrollTab.fixWidth()
    },
    active (index) {
      this.$refs.ScrollTab.active(index)
    },
    click () {
      this.testData.push(0)
      this.$refs.ScrollTab.fixWidth()
    }
  }
}
</script>

<style lang="less" module>
body, html {
  margin: 0;
}

.App {
  width: 100%;
  padding-top: 200px;
}

.ScrollTab {
  width: 600px;
  margin: 0 auto;
}

.item {
  @size: 60px;
  height: @size;
  text-align: center;
  line-height: @size;
  width: @size;
  background: #4EBC8F;

  &:nth-child(2n) {
    width: @size * 1.5;
    background: #F9AB48;
  }

  &:nth-child(3n) {
    width: @size * 2;
    background: red;
  }
}
</style>
