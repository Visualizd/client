<template>
  <div class="login">
    <div class="login-card card card-body mt-4">
      <h3 class="card-title text-center">Login</h3>
      <div class="card-text">
        <form>
          <div class="form-group mb-3">
            <label for="username">Username</label>
            <input type="text" class="form-control" id="username" placeholder="Username">
          </div>
          <div class="form-group mb-3">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" placeholder="Password">
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>


<style scoped>
  .login-card {
    max-width: 24rem;
    margin: auto;
  }
</style>
