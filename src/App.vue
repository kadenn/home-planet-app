<template>
  <div id="app">
    <img class="app-logo" alt="HPA logo" src="./assets/logo.png" />
    <Welcome msg="Welcome to Home Planet App!" />
    <People />
  </div>
</template>

<script>
import Welcome from "./components/Welcome.vue";
import People from "./components/People.vue";

export default {
  name: "App",
  components: {
    Welcome,
    People,
  },
};
</script>

<style>
html {
  scroll-behavior: smooth;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

.app-logo {
  height: 30vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .app-logo {
    animation: App-logo-float infinite 3s ease-in-out;
  }
}

@keyframes App-logo-float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>



