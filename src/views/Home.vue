<template>
  <div class="container">
    <UserList/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import UserList from '@/components/UserList';

export default {
  name: 'Home',
  components: {
   UserList
    
  }
}
</script>
