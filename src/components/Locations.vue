<template>
    <div>
        <div v-for="location in unlockedLocations" :key="location.id">
            <button @click="changeActiveLocation(location.id)">{{ location.name }}</button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: "Locations",
    props: {},
    computed: {
        ...mapGetters({
            unlockedLocations: 'locations/getUnlockedLocations'
        })
    },
    methods: {
        ...mapActions({
            changeActiveLocation: 'locations/changeActiveLocation'
        })
    }
};
</script>

<style lang="scss" scoped>
</style>
