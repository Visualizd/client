<template>
<b-container fluid>
  <div style="height: 60px">
  </div>
  <b-row>
    <b-col cols="4">
    </b-col>
    <b-col>
        <div class="form">
            <div class="contents">
              <form>
                  <h3>Sign Up</h3>

                  <div class="form-group">
                      <label>Full Name</label>
                      <input type="text" class="form-control form-control-lg"/>
                  </div>

                  <div class="form-group">
                      <label>Email address</label>
                      <input type="email" class="form-control form-control-lg" />
                  </div>

                  <div class="form-group">
                      <label>Password</label>
                      <input type="password" class="form-control form-control-lg" />
                  </div>

                  <button type="submit" class="btn btn-dark btn-lg btn-block">Sign Up</button>

                  <p>
                      Already registered
                      <router-link :to="{name: 'login'}">sign in?</router-link>
                  </p>
              </form>
            </div>
        </div>
    </b-col>
  </b-row>
</b-container>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>

.form {
  max-width: 450px;
  padding: 20px;
  align-self: center;
  background-color: white;
  border-radius: 15px;
}

/* .contents {
  max-width: ;
} */

</style>
