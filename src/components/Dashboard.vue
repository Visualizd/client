<template>
  <div id="body">
    <h2 class="pb-2">Dashboard</h2>
    <b-card-group deck>
      <b-card no-body class="shadow-sm">
        <b-card-body class="pt-3">
          <div>
            <h4 style="display: inline-block;">Account Summary</h4>
            <a class="float-right" href="/account">Account <font-awesome-icon icon="chevron-right" /></a>
          </div>
          Account summary stuff here
        </b-card-body>
      </b-card>
      <b-card no-body class="shadow-sm">
        <b-card-body class="pt-3">
          What should go here?
        </b-card-body>
      </b-card>
    </b-card-group>
    <b-card no-body class="mt-4 shadow-sm">
      <b-card-body class="pt-3">
        <div>
          <h4 style="display: inline-block;">Projects</h4>
          <a class="float-right pt-2" href="/projects">All Projects <font-awesome-icon icon="chevron-right" /></a>
        </div>
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
    </b-card>
    <b-card no-body class="mt-4 shadow-sm">
      <b-card-body class="pt-3">
        <div>
          <h4 style="display: inline-block;">Datasets</h4>
          <a class="float-right pt-2" href="/projects">All Datasets <font-awesome-icon icon="chevron-right" /></a>
        </div>
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
    </b-card>
    <br>
  </div>
</template>
