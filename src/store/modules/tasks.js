const state = {
    farm : [
        {
            id: 'wheat-harvest',
            name: 'Harvest wheat',
            unlocked: true,
            rewards: {
                food: 1
            },
            upgrades: {
                gold: 15
            },
            requirements: false
        },
        {
            id: 'pig-raise',
            name: 'Raise pigs',
            unlocked: false,
            rewards: {
                food: 10
            },
            upgrades: {
                gold: 1000
            },
            requirements: {
                gold: 100,
                food: 100
            }
        }
    ],
    forge: [
        {
            id: 'iron-mining',
            name: 'Mine iron ore',
            unlocked: false,
            rewards: {
                iron: 1
            },
            upgrades: {
                gold: 15
            },
            requirements: {
                gold: 250
            }
        }
    ]
};

const getters = {
    getActionsByLocation: (state) => (location) => {
        return state[location];
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