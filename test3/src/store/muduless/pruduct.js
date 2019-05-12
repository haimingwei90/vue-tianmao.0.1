const state = {
    all:[],
    tset:'hh'
}
const getters = {
    all:(state,getter,routState)=>{
        return state.all
    }
}
const mutations = {
    init(state,data){
        state.all = data
    }
}
const actions = {
    init(context,data){
        context.commit(data)
    }
}
export default {
    state,
    getters,
    mutations,
    actions
}