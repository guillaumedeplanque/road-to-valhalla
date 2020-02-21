const state = {
    resources : [
        { id: 'gold', name: 'Gold', unlocked: true, amount: 10 },
        { id: 'food', name: 'Food', unlocked: false, amount: 0 }
    ]
};

const getters = {
    getUnlockedResources: state => {
        return state.resources.filter(resource => resource.unlocked)
    }
};

const actions = {};

const mutations = {};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}