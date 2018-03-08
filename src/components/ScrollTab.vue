<template>
  <div
    ref="sTab"
    class="sTab">
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
      wrapWidth: 100000,
      itemInfos: []
    }
  },
  mounted () {
    this.fixWidth()
  },
  methods: {
    active (index) {
      const item = this.itemInfos[index]
      alert(item.left)
      const left = item.left + (item.width / 2) - (this.$refs.sTab.offsetWidth / 2)
      this.smoothScroll(left)
    },
    fixWidth () {
      this.$nextTick(() => {
        if (!this.$slots.default) {
          return
        }

        this.positionList = []
        let tempWidth = 0

        this.$slots.default.forEach(({ elm }, index) => {
          const rect = elm.getBoundingClientRect()
          this.itemInfos.push({
            left: tempWidth,
            width: rect.width,
            index
          })
          tempWidth += rect.width
        })

        this.wrapWidth = tempWidth
      })
    },
    smoothScroll (to) {
      const self = this
      const scroller = this.$refs.sTab
      let from = scroller.scrollLeft

      const direction = to - from > 0 ? 'bottom' : 'top'
      this.scrolling = true
      const intervalId = setInterval(() => {
        if (Math.abs(from - to) <= 20) {
          clearInterval(intervalId)
          scroller.scrollLeft = to
          self.scrolling = false
        } else {
          let r = (to - from) / 3
          r = Math.abs(r) > 20 ? r : direction === 'bottom' ? 20 : -20
          from += r
          scroller.scrollLeft = from
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
  display: block;
  overflow: hidden;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  overflow-scrolling: touch;

  .sTabWrap > * {
    display: inline-block;
  }
}
</style>
