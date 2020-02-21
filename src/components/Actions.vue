<template>
  <div>
    <div v-for="action in actionsByLocation(activeLocation.id)" :key="action.id">
      <p>{{ action.name }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "Actions",
  props: {},
  computed: {
    ...mapGetters({
      activeLocation: 'locations/getActiveLocation',
      actionsByLocation: 'tasks/getActionsByLocation'
    })
  }
};
</script>

<style lang="scss" scoped>
</style>
