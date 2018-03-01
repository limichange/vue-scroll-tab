<template>
  <div
    ref="sTab"
    class="sTab"
    @click="clickHandle">
    <div
      :style="{ width: `${wrapWidth}px` }"
      class="sTabWrap">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScrollTab',
  data () {
    return {
      wrapWidth: 0,
      itemInfos: []
    }
  },
  mounted () {
    this.fixWidth()
  },
  methods: {
    clickHandle (e) {
      const sTab = this.$refs.sTab
      const left = e.layerX + sTab.scrollLeft

      const item = this.itemInfos.find((info, index, itemInfos) => {
        if (!itemInfos[index + 1]) {
          return info
        } else {
          return info.left < left && itemInfos[index + 1].left > left
        }
      })

      sTab.scrollLeft = item.left + (item.width / 2) - (sTab.offsetWidth / 2)
      this.$emit('click', item)
    },
    fixWidth () {
      this.$nextTick(() => {
        this.positionList = []
        this.wrapWidth = 0
        this.$slots.default.forEach(({ elm }, index) => {
          this.itemInfos.push({
            left: this.wrapWidth,
            width: elm.offsetWidth,
            index
          })
          this.wrapWidth += elm.offsetWidth
        })
      })
    }
  }
}
</script>

<style lang="less">
.sTab {
  width: 100%;
  overflow: auto;
  display: block;
  overflow: hidden;
  overflow-x: auto;
  overflow-scrolling: touch;

  .sTabWrap {
    & > div {
      display: inline-block;
    }
  }
}
</style>
