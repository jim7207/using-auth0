<template>
  <div id="app" class="d-flex flex-column h-100">
    <nav-bar />
    <div class="container flex-grow-1">
      <error />
      <div class="mt-5">
        <router-view />
        <!-- Show Login Button if Not Authenticated -->
        <button v-if="!isAuthenticated" @click="login">Login</button>
        <p v-else>Welcome back, {{ user?.name }}!</p>
      </div>
    </div>
    <footer class="bg-light text-center p-3">
      <div class="logo"></div>
      <p>
        Sample project provided by
        <a href="https://auth0.com">Auth0</a>
      </p>
    </footer>
  </div>
</template>

<script lang="ts">
import { useAuth0 } from '@auth0/auth0-vue';
import NavBar from "./components/NavBar.vue";
import Error from "./components/Error.vue";
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';



export default {
  components: {
    NavBar,
    Error
  },
  setup() {
    const { isAuthenticated, loginWithRedirect, user } = useAuth0();

    // Login function
    const login = () => {
      loginWithRedirect({
        appState: { target: '/profile' }, // Define the post-login route
        redirect_uri: `${window.location.origin}/profile`,
    });
};


    return {
      isAuthenticated,
      login,
      user
    };
  },
};
</script>
