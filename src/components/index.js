import ScrollTab from './ScrollTab'
import ScrollTabItem from './ScrollTabItem'

function install (Vue) {
  Vue.component(ScrollTab.name, ScrollTab)
  Vue.component(ScrollTabItem.name, ScrollTabItem)
}

ScrollTab.install = install

export default {
  ScrollTab,
  ScrollTabItem
}
