<template>
  <div id="app" class="wrapper">
    <div class="column">
      <section class="section">
        <p class="section__title">Progression</p>
        <div class="section__inner">
          <Progression />
        </div>
      </section>
      <section class="section">
        <p class="section__title">Actions</p>
        <div class="section__inner">
          <Actions />
        </div>
      </section>
    </div>
    <div class="column">
      <section class="section">
        <p class="section__title">Heros</p>
        <div class="section__inner">
          <Heros />
        </div>
      </section>
      <section class="section">
        <p class="section__title">Marchand/Inventaire</p>
        <div class="section__inner">
          <Inventory />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Progression from "./components/Progression";
import Actions from "./components/Actions";
import Heros from "./components/Heros";
import Inventory from "./components/Inventory";

export default {
  name: "App",
  components: {
    Progression,
    Actions,
    Heros,
    Inventory
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  height: 100vh;
  display: flex;
}

.column {
  flex: 0 0 50%;
  display: flex;
  flex-direction: column;
}

.section {
  flex: 1 1 50%;
  padding: 3%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &__title {
    font-size: 18px;
    font-weight: bold;
  }

  &__inner {
    border: 1px solid #000;
    height: 94%;
  }
}
</style>
