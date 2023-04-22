<template>
  <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Logo</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav w-100">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/products">Products</router-link>
          </li>
          <li class="nav-item" v-if="$store.getters.isLoggedin">
            <router-link class="nav-link" to="/dashboard">Dashboard</router-link>
          </li>
          <li class="nav-item ms-sm-auto" v-if="!$store.getters.isLoggedin">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
          <li class="nav-item" v-if="!$store.getters.isLoggedin">
            <router-link class="nav-link" to="/register">Register</router-link>
          </li>
          <li class="nav-item ms-sm-auto" v-if="$store.getters.isLoggedin">
            <a class="nav-link" href="#" @click.prevent="logout">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
  import { useStore } from 'vuex'
  import { useRouter } from 'vue-router'
  const app = {
    setup() {
      const store = useStore();
      const router = useRouter();
      function logout() {
        axios.post('/logout').then(r => {
          store.dispatch('logout');
          router.push({ name: 'home'})
        });
      }
      return {
        logout
      }
    }
  }
  export default app;
</script>