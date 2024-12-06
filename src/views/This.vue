<template>
    <div class="container">
      <div class="row align-items-center profile-header">
        <div class="col-md-2 mb-3">
          <img
            :src="user?.picture"
            alt="User's profile picture"
            class="rounded-circle img-fluid profile-picture"
          />
        </div>
        <div class="col-md text-center text-md-left">
          <h2>{{ user?.name }} is on THIS page. Do a little dance!</h2>
          <p class="lead text-muted">{{ user?.email }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { useAuth0 } from '@auth0/auth0-vue';
  
  export default {
    name: "profile-view",
    setup() {
      const auth0 = useAuth0();
      
      return {
        user: auth0.user,
        jim: "jimmy the hitch"
      }
    }
  };
  </script>
  
  