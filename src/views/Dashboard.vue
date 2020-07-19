<template>
  <div>
    <!-- <div id="sidebar">
      test
    </div> -->
    <b-container id="body">
      <h2 class="mt-3 mb-3">Dashboard</h2>
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

#sidebar {
  position: absolute;
  background-color: gray;
  width: 12em;
  top: 0;
  bottom: 0;
}

</style>
