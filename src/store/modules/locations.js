const state = {
    places : [
        { id: 'farm', name: 'Farm', unlocked: true, active: true },
        { id: 'forge', name: 'Forge', unlocked: true, active: false}
    ]
};

const getters = {
    getUnlockedLocations: state => {
        return state.places.filter(location => location.unlocked)
    },
    getActiveLocation: state => {
        return state.places.find(location => location.active === true)
    }

};

const actions = {
    changeActiveLocation: (ctx, location) => {
        ctx.commit('setActiveLocation', {
            location: location
        })
    }
};

const mutations = {
    setActiveLocation: (state, payload) => {
        const currentLocation = state.places.find(location => location.active === true);
        currentLocation.active = false;
        const location = state.places.find(location => location.id === payload.location);
        location.active = true;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}