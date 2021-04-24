<template>
  <div class="container">
        <div class="row mt-4 p-3 pt-4">
            <div class="col">
                <router-link class="btn btn-info my-3" to='/'>Back to Home page</router-link>
                <div class="card card-default">

                    <div class="card-body ">
                        <h3>{{user_info.name}}</h3>
                        <img class="ml-3" height="200px" width="200px" style="border-radius:100%" :src="user_info.avatar_url" alt="" />
                        <div class=" m-3 p-3">
                            <p class="lead">{{user_info.bio}}</p>
                            <p>{{user_info.location}}</p>
                           <div class="d-flex  " >
                             <div class="badge badge-success mx-2 ">Followers : {{user_info.followers}}</div>
                            <div class="badge badge-info">Followers : {{user_info.followers}}</div>
                            <div class="col">
                                <div v-if="user_info.email">
                                <p>Hireme</p>
                            </div>
                            <div v-else>
                                No email
                            </div>
                            </div>
                            
                           </div>
                            
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
name:'Single',
data(){
    return{
        user_info: {}
    }
},

created(){
    axios.get(`https://api.github.com/users/${this.$route.params.login}`)
    .then(res=>{
        this.user_info = res.data
        console.log(this.user_info)
        console.log(this.$route.params)
    })
}
}
</script>

<style>

</style>