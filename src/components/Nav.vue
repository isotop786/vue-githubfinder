<template>
  <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a  >
        <router-link class="navbar-brand" to="/"> Vue Githubfinder</router-link>
     </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      
          <router-link class="nav-link " to="/">Home</router-link>
         
      <router-link class="nav-link" to="/about">About</router-link>
      <a class="nav-link" href="#">Pricing</a>
      <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
    </div>
  </div>
</nav>
  </div>
</template>

<script>
export default {
name:"Nav"
}
</script>

<style>

</style>