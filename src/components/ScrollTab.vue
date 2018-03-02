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

      this.active(item.index)
      this.$emit('click', item)
    },
    active (index) {
      const item = this.itemInfos[index]
      const left = item.left + (item.width / 2) - (this.$refs.sTab.offsetWidth / 2)
      this.smoothScroll(left)
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
    },
    smoothScroll (to, mode = 'h') {
      const scroller = this.$refs.sTab
      const isH = mode === 'h'
      const scorllType = isH ? 'scrollLeft' : 'scrollTop'
      let from = scroller[scorllType]

      this.scrolling = true
      const intervalId = setInterval(() => {
        if (Math.abs(from - to) <= 20) {
          clearInterval(intervalId)
          scroller[scorllType] = to
          this.scrolling = false
        } else {
          let r = (to - from) / 3
          r = Math.abs(r) > 20
            ? r
            : to - from > 0 ? 20 : -20
          from += r
          scroller[scorllType] = from
        }
      }, 16.7)
    }
  }
}
</script>

<style lang="less">
.sTab {
  width: 100%;
  overflow: auto;
  overflow-scrolling: touch;

  .sTabWrap {
    & > div {
      display: inline-block;
    }
  }
}
</style>
