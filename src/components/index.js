import ScrollTab from './ScrollTab'

ScrollTab.install = function (Vue) {
  Vue.component(ScrollTab.name, ScrollTab)
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(ScrollTab)
}

export default ScrollTab
