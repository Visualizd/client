<template>
<b-container class="backdrop" fluid>
  <div style="height: 60px">
  </div>
  <b-row>
    <b-col cols="4">
    </b-col>
    <b-col>
        <div class="form">
            <div class="contents">
              <form>
                  <h3>Login</h3>

                  <div class="form-group">
                      <label>Username</label>
                      <input type="text" class="form-control form-control-lg"/>
                  </div>
                  <div class="form-group">
                      <label>Password</label>
                      <input type="password" class="form-control form-control-lg" />
                  </div>

                  <button type="submit" class="btn btn-dark btn-lg btn-block" @click="test">Sign Up</button>

                  <p>
                      Already registered 
                      <!-- <router-link :to="{name: 'login'}">sign in?</router-link> -->
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
            return {
              test: function() {
                console.log("hello world");
              }
            }
        }
    }
</script>

<style scoped>

.backdrop {
  background-color: lightgray;
}

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