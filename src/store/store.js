import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

import locations from "./modules/locations";
import inventory from "./modules/inventory";
import tasks from "./modules/tasks";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        locations,
        inventory,
        tasks
    },
    plugins: [createPersistedState()]
})