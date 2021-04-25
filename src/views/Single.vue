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
                            <p>Location: {{user_info.location}}</p>
                           <div class=" " >
                             <div class="badge badge-success mx-2 ">Followers : {{user_info.followers}}</div>
                            <div class="badge badge-info">Followers : {{user_info.followers}}</div>
                            
                                <p class="my-2 ">Website : 
                                     <a :href="user_info.blog">{{user_info.blog}}</a></p>
                                <p v-if="user_info.hireable">Not working, Hireable</p>
                               <p>Company: <span v-if="user_info.company">{{user_info.company}}</span><span v-else>User didn't add on profile</span></p>
                               <p>Twitter: <span v-if="user_info.twitter_username">{{user_info.twitter_username}}</span><span v-else>User didn't add on profile</span></p>
                                <a target="_blank" :href="user_info.html_url" class="my-3 btn btn-danger">view in github</a>
                            <div class="col">
                                <div v-if="user_info.email">
                                   <p>Email : {{user_info.email}}</p>
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
        // console.log(this.user_info)
        // console.log(this.$route.params)
    })
}
}
</script>

<style>

</style>