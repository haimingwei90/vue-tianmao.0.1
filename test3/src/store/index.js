import Vue from 'vue'
import Vuex from 'vuex'
import user from './muduless/user'
Vue.use(Vuex)
export default new Vuex.Store({
   

  modules:{
      user,
  }
})
// if (module.hot) {
//     // 使 action 和 mutation 成为可热重载模块
//     module.hot.accept(['./mutations', './modules/user'], () => {
//       // 获取更新后的模块
//       // 因为 babel 6 的模块编译格式问题，这里需要加上 `.default`
//       const newMutations = require('./mutations').default
//       const newModuleA = require('./modules/user').default
//       // 加载新模块
//       store.hotUpdate({
//         mutations: newMutations,
//         modules: {
//           a: newModuleA
//         }
//       })
//     })
// }
