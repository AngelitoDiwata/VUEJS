export const state = () => ({
    result: '',
    holdValue: '',
    operator: ''
})

export const mutations = {
    addition(state) {
        state.operator = '+';
        state.holdValue = state.result;
        state.result = '';
    },
    subtraction(state) {
        state.operator = '-'
        state.holdValue = state.result;
        state.result = '';
    },
    multiplication(state) {
        state.operator = '*';
        state.holdValue = state.result;
        state.result = '';
    },
    division(state) {
        state.operator = '/';
        state.holdValue = state.result;
        state.result = '';
    },
    btnPress(state, newVal) {
        state.result += newVal;
    },
    setNewVal(state, newVal) {
        state.result = newVal;
    }
}

export const getters = {
    getResultValue(state) {
        return state.result;
    }
}


export const actions = {
    addition(context) {
        context.commit('addition');
    },
    subtraction(context) {
        context.commit('subtraction');
    },
    multiplication(context) {
        context.commit('multiplication');
    },
    division(context) {
        context.commit('division');
    },
    btn(context, newVal) {
        context.commit('btnPress', newVal);
    },
    btnE(context) {
        let newVal = 0;
        if (this.state.operator === '+') {
            newVal = parseInt(this.state.result) + parseInt(this.state.holdValue);
        } else if (this.state.operator === '-') {
            newVal = parseInt(this.state.holdValue) - parseInt(this.state.result);
        } else if (this.state.operator === '*') {
            newVal = parseInt(this.state.result) * parseInt(this.state.holdValue);
        } else if (this.state.operator === '/') {
            newVal = parseInt(this.state.holdValue) / parseInt(this.state.result);
        }
        context.commit('setNewVal', newVal);
    },

}