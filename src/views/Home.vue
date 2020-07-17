<template>
  <div class="container" style="margin-top: 1rem;">
    <div class="card">
      <div class="card-header">
        <ul class="nav nav-tabs card-header-tabs">
          <li class="nav-item">
            <a class="nav-link active" id="projects-tab" data-toggle="tab" href="#projects">Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="datasets-tab" data-toggle="tab" href="#datasets">Datasets</a>
          </li>
        </ul>
      </div>
      <!-- Projects Panel -->
      <div class="tab-content card-body">
        <div class="tab-pane fade show active" id="projects">
          <div class="card-text">
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#add-project-modal"><i class="fas fa-plus"></i> Create Project</button>
            <!-- modal for dataset add button -->
            <div class="modal fade" id="add-project-modal" tabindex="-1" role="dialog">
              <div class="modal-dialog modal-lg">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title">Create Project</h5>
                    <button type="button" class="close" data-dismiss="modal">
                      <span>&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <form id="createProject" method="post">
                      <div class="form-group">
                        <label>Project Name</label>
                        <input type="text" class="form-control col-4" id="projectName" name="projectName" placeholder="Project Name">
                      </div>
                    </form>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    <button type="submit" form="createProject" class="btn btn-primary" name="projectCreationSubmit">Create</button>
                  </div>
                </div>
              </div>
            </div>
            <!-- -->
            <div class="float-right"><!-- serves as a container for the icons on the right -->
              <div class="input-group">
                <input type="text" class="form-control border-right-0" placeholder="Search Projects...">
                <div class="input-group-append">
                  <span class="input-group-text bg-transparent"><i class="fas fa-search"></i></span>
                </div>
              </div>
            </div>
          </div>
          <hr>
              <div id="project" class="card mt-3">
                <div class="card-body p-0">
                  <div class="card-text p-3 col-9 float-left"><a href="/projects/" class="text-dark stretched-link"></a></div>
                  <div class="card-text p-3 float-right">
                    <a class="text-secondary" data-toggle="modal" data-target="#delete-project-modal"><i class="fas fa-trash-alt"></i></a>
                  </div>
                </div>
              </div>
              <!-- modal  -->
              <!-- This is a little ugly. Could potentially be replaced with React so that it doesn't have to be repeated for each project -->
              <div class="modal fade" tabindex="-1" role="dialog">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title">Delete Project</h5>
                      <button type="button" class="close" data-dismiss="modal">
                        <span>&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      Are sure you want to delete this project? This project will be permanently deleted.
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                      <button type="button" class="btn btn-danger" data-dismiss="modal" onclick="deleteProject()">Delete</button>
                    </div>
                  </div>
                </div>
              </div>
        </div>

        <!-- Datasets Panel -->
        <div class="tab-pane fade" id="datasets">
          <div class="card-text">
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#add-dataset-modal"><i class="fas fa-fw fa-upload"></i> Add Dataset</button>
            <!-- modal for dataset add button -->
            <div class="modal fade" id="add-dataset-modal" tabindex="-1" role="dialog">
              <div class="modal-dialog modal-lg">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title">Upload Dataset</h5>
                    <button type="button" class="close" data-dismiss="modal">
                      <span>&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <form id="datasetUpload" method="post" enctype="multipart/form-data">
                      <div class="form-group">
                        <label>Dataset Name</label>
                        <input type="text" class="form-control col-4" id="datasetName" name="datasetName" placeholder="Dataset Name">
                      </div>
                      <div class="form-group">
                        <label>Upload a file</label>
                        <input type="file" class="form-control-file" name="uploadedDataset">
                      </div>
                    </form>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    <button type="submit" form="datasetUpload" class="btn btn-primary" name="datasetUploadSubmit">Upload</button>
                  </div>
                </div>
              </div>
            </div>
            <!-- -->
            <div class="float-right"><!-- serves as a container for the icons on the right -->
              <div class="input-group">
                <input type="text" class="form-control border-right-0" placeholder="Search Datasets...">
                <div class="input-group-append">
                  <span class="input-group-text bg-transparent"><i class="fas fa-search"></i></span>
                </div>
              </div>
            </div>
          </div>
          <hr>
              <div class="card mt-3">
                  <a href="/datasets/" class="text-dark">
                    <div class="card-body p-3">
                      <span class="card-text"></span>
                    </div>
                  </a>
              </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
}
</script>

<style>



</style>