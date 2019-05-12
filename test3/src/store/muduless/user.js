const state = {
    name :''
}
const getters = {
    username : (state,getters,rootState)=>{
        return state.name
    }
}
const mutations = {
    init(state,{name}){
          
        state.name = name
    }
}
const actions = {
    init(context,{name}){
        context.commit('init',{name})
    }
}
export default  {
    state,
    getters,
    mutations,
    actions
}