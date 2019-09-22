export const state = () => ({
    result: 0
})

export const mutations = {
    addition(state, mSum) {
        state.result = mSum
    },
    subtraction(state, mDiff) {
        state.result = mDiff
    },
    multiplication(state, mProd) {
        state.result = mProd
    },
    division(state, mQuot) {
        state.result = mQuot
    }
}
export const actions = {
    addition(context, mCurrentVal) {
        let mHold = state.result
        let mSum = mCurrentVal + mHold
        context.commit('addition', mSum)
    },
    subtraction(context, mCurrentVal) {
        let mHold = state.result
        let mDiff = mCurrentVal - mHold
        context.commit('subtraction', mDiff)
    },
    multiplication(context, mCurrentVal) {
        let mHold = state.result
        let mProd = mCurrentVal * mHold
        context.commit('multiplication', mProd)
    },
    division(context, mCurrentVal) {
        let mHold = state.result
        let mQuot = mCurrentVal / mHold
        context.commit('division', mQuot)
    }
}