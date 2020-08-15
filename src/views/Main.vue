<template>
  <div id="wrapper">
    <div id="sidebar" class="mt-4 ml-3 mr-0">
      <b-list-group style="width: 15em;">
        <b-list-group-item button class="sidebar-active">Account</b-list-group-item>
        <b-list-group-item button>Dashboard</b-list-group-item>
        <b-list-group-item button>Projects</b-list-group-item>
        <b-list-group-item button>Datasets</b-list-group-item>
      </b-list-group>
    </div>
    <b-container class="mt-3">
      <router-view />
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      variant: "dark",
    };
  },
};
</script>

<style scoped lang="scss">

#wrapper {
  display: flex;
  flex-flow: row;
}

@import 'bootstrap/scss/_functions.scss';
@import 'bootstrap/scss/_variables.scss';
@import 'bootstrap/scss/_variables.scss';
.sidebar-active {
  border-left-color: $primary;
  border-left-width: 3px;
}

</style>
