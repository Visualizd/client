<template>
  <center>
    <div class="card w-50 p-3">
      <label for="uname"><b>Username</b></label>
      <input v-model="username" type="text" placeholder="Enter Username" name="uname" required>

      <label for="psw"><b>Password</b></label>
      <input v-model="passwd" type="password" placeholder="Enter Password" name="psw" required>
      <br>

      <b-button type="submit" variant="success">Login</b-button>
      <label>
        <input type="checkbox" checked="checked" name="remember"> Remember me
      </label>
    </div>
  </center>
</template>

<script lang="ts">

export default {
    data() {
        return {
            username: "",
            passwd: "",
        }
    }
}

</script>
