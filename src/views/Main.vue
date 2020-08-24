<template>
  <div id="wrapper">
    <div id="sidebar" class="mt-4 ml-3 mr-0">
      <b-list-group class="shadow-sm" style="width: 15em;">
        <b-list-group-item button class="sidebar-active">
          <router-link to="/<username>">Dashboard</router-link>
        </b-list-group-item>
        <b-list-group-item button>
          <router-link to="/<username>/projects">Projects</router-link>
        </b-list-group-item>
        <b-list-group-item button>
          <router-link to="/<username>/datasets">Datasets</router-link>
        </b-list-group-item>
      </b-list-group>
    </div>
    <!-- container for content -->
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
