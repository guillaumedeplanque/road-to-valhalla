<template>
  <div>
    <div v-for="resource in unlockedResources" :key="resource.id">
      <p>{{ resource.name }} : {{ resource.amount }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "Inventory",
  props: {},
  computed: {
    ...mapGetters({
      unlockedResources: 'inventory/getUnlockedResources'
    })
  }
};
</script>

<style lang="scss" scoped>
</style>
