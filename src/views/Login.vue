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
                      <input v-model="username" type="text" class="form-control form-control-lg"/>
                  </div>
                  <div class="form-group">
                      <label>Password</label>
                      <input
                        v-model="password"
                        type="password"
                        class="form-control form-control-lg"
                      />
                  </div>

                 <b-button @click="login" variant="dark">Submit</b-button>

                  <p>
                      Already registered
                      <!-- <router-link :to="{name: 'login'}">sign in?</router-link> -->
                  </p>
                  <p>
                    {{ username }}
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
      username: "",
      password: "",
    };
  },

  methods: {
    test() {
      this.username = "Test";
    },

    login() {
      const baseURI = "https://jsonplaceholder.typicode.com/users";
      this.$http.get(baseURI)
        .then((result) => {
          this.username = result;
        });
    },
  },
};
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
