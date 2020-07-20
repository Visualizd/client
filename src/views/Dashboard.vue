<template>
  <div id="wrapper">
    <div id="sidebar" class="mt-4 ml-4 mr-0">
      <b-card no-body class="shadow-sm">
        <b-card-body class="p-2" style="width: 15em;">
          <nav class="nav nav-pills flex-column">
            <a class="nav-link" href="/projects"><font-awesome-icon icon="user" class="mr-1" /> <span>Account</span></a>
            <a class="nav-link active" href="/"><font-awesome-icon icon="tachometer-alt" class="mr-1" /> <span>Dashboard</span></a>
            <a class="nav-link" href="/projects"><font-awesome-icon icon="file" class="mr-1" /> <span>Projects</span></a>
            <a class="nav-link" href="/projects"><font-awesome-icon icon="database" class="mr-1" /> <span>Datasets</span></a>
          </nav>
        </b-card-body>
      </b-card>
    </div>
    <b-container class="mt-3">
      <div id="body">
        <h2 class="pb-2">Dashboard</h2>
        <b-card no-body class="shadow-sm">
          <b-card-body class="pb-0">
            <b-card-title>Projects</b-card-title>
            <b-card-group deck>
              <b-card img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top no-body><!-- no-body is necessary for proper formatting of footer.  Body is manually added later. -->
                <b-card-footer>
                  <b><a href="/link/to/project">New Project</a></b>
                </b-card-footer>
              </b-card>
              <b-card img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top no-body><!-- no-body is necessary for proper formatting of footer.  Body is manually added later. -->
                <b-card-footer>
                  <b><a href="/link/to/project">Project 1</a></b>
                </b-card-footer>
              </b-card>
              <b-card img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top no-body><!-- no-body is necessary for proper formatting of footer.  Body is manually added later. -->
                <b-card-footer>
                  <b><a href="/link/to/project">Project 2</a></b>
                </b-card-footer>
              </b-card>
              <b-card img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top no-body><!-- no-body is necessary for proper formatting of footer.  Body is manually added later. -->
                <b-card-footer>
                  <b><a href="/link/to/project">Project 3</a></b>
                </b-card-footer>
              </b-card>
            </b-card-group>
          </b-card-body>
          <div class="text-center">
            <font-awesome-icon icon="chevron-down" class="m-1" style="font-size: 2em;" />
          </div>
        </b-card>
        <b-card no-body class="mt-4 shadow-sm">
          <b-card-body class="pb-0">
            <b-card-title>Datasets</b-card-title>
            <b-card-group deck>
              <b-card img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top no-body><!-- no-body is necessary for proper formatting of footer.  Body is manually added later. -->
                <b-card-footer>
                  <b><a href="/link/to/project">New Dataset</a></b>
                </b-card-footer>
              </b-card>
              <b-card img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top no-body><!-- no-body is necessary for proper formatting of footer.  Body is manually added later. -->
                <b-card-footer>
                  <b><a href="/link/to/project">Dataset 1</a></b>
                </b-card-footer>
              </b-card>
              <b-card img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top no-body><!-- no-body is necessary for proper formatting of footer.  Body is manually added later. -->
                <b-card-footer>
                  <b><a href="/link/to/project">Dataset 2</a></b>
                </b-card-footer>
              </b-card>
              <b-card img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top no-body><!-- no-body is necessary for proper formatting of footer.  Body is manually added later. -->
                <b-card-footer>
                  <b><a href="/link/to/project">Dataset 3</a></b>
                </b-card-footer>
              </b-card>
            </b-card-group>
          </b-card-body>
          <div class="text-center">
            <font-awesome-icon icon="chevron-down" class="m-1" style="font-size: 2em;" />
          </div>
        </b-card>
        <br>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
     data() {
      return {
        variant: 'dark',
      }
    }
}
</script>

<style scoped lang="scss">

#wrapper {
  display: flex;
  flex-flow: row;
}

// This is used for controlling the number of cards per row
// @import 'bootstrap/scss/_functions.scss';
// @import 'bootstrap/scss/_variables.scss';
// @import 'bootstrap/scss/_mixins.scss';
// .card-columns {
//   @include media-breakpoint-only(md) {
//     column-count: 3;
//   }
//   @include media-breakpoint-only(lg) {
//     column-count: 3;
//   }
//   @include media-breakpoint-only(xl) {
//     column-count: 5;
//   }
// }

</style>
