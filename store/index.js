export const state = () => ({
    counter: ''
})

export const mutations = {
    increment(state, aData) {
        state.counter = aData
    },
    decrement(state) {
        state.counter--
    },
    multiply(state) {
        state.counter *= state.counter
    }
}
export const actions = {
    increment(context) {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => context.commit('increment', json))
    }
}