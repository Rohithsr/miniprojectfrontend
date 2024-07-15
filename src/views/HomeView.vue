<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" class="logo">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div class="navigation">
      <router-link to="/tasks" class="nav-link">View Tasks</router-link>
      <router-link to="/about" class="nav-link">About</router-link>
    </div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
}

.logo {
  width: 200px;
  height: 200px;
  margin-bottom: 20px;
}

.navigation {
  margin-top: 20px;
}

.nav-link {
  margin: 0 10px;
  padding: 10px 20px;
  background-color: #007BFF;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  cursor: pointer;
}

.nav-link:hover {
  opacity: 0.8;
}
</style>
