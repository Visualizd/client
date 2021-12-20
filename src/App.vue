<template>
  <div id="app">
    <nav class="navbar navbar-expand-sm navbar-dark bg-primary px-4 sticky-top">
      <router-link to="/" class="navbar-brand">Visualizd</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/projects" class="nav-link">My Projects</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import "css/bootstrap";
</style>
