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
    btn1(context) {
        let newVal = '1';
        context.commit('btnPress', newVal);
    },
    btn2(context) {
        let newVal = '2';
        context.commit('btnPress', newVal);
    },
    btn3(context) {
        let newVal = '3';
        context.commit('btnPress', newVal);
    },
    btn4(context) {
        let newVal = '4';
        context.commit('btnPress', newVal);
    },
    btn5(context) {
        let newVal = '5';
        context.commit('btnPress', newVal);
    },
    btn6(context) {
        let newVal = '6';
        context.commit('btnPress', newVal);
    },
    btn7(context) {
        let newVal = '7';
        context.commit('btnPress', newVal);
    },
    btn8(context) {
        let newVal = '8';
        context.commit('btnPress', newVal);
    },
    btn9(context) {
        let newVal = '9';
        context.commit('btnPress', newVal);
    },
    btn0(context) {
        let newVal = '0';
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
            newVal = parseInt(this.state.result) / parseInt(this.state.holdValue);
        }
        context.commit('setNewVal', newVal);
    },

}