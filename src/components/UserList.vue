<template>
<div class="container">

      <div class="row w-100 my-4 input-group mb-3">
      
     
  
          <input type="text" class="form-control" v-model="keyword" placeholder="Search User">
           <div class="input-group-append">
          <button class="btn btn-primary"  @click.prevent="search">Search</button>
           </div>
      </div>
 
    <div class="row mb-4 text-center" v-if="new_user !=null">
        <div class="col-md-3"></div>
        <div class="col-md-6 text-center">
            <h3>Search Result for {{new_user.login}}</h3>
           
                <div class="card" style="width: 18rem;">
                    <img :src="new_user.avatar_url" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">{{new_user.login}}</h5>
                        <p class="card-text" v-if="new_user.location !=null">From {{new_user.location}}</p>
                    <router-link :to="{name:'Single',params:{login:new_user.login}}" class="btn btn-primary stretched-link">View Details</router-link>
                     </div>
                </div>  
        </div>
        <div class="col-md-3"></div>
    </div>

<hr>

 <div class="row mt-4 p-2">
     <div class="col text-center mt-4">
          <h2 class="display-4">Github Founders</h2>
     </div>
    
        <div class="row">
          <div class="col-md-3 my-3" v-for="(u,i) in user" :key="i">
    
                 <div class="card">
                    
                <div class="card-body text-center">
                    <h5>{{u.login}}</h5>
                     <img :src="u.avatar_url" height="100px" width="100px" style="border-radius:100%"/>  
                <router-link class="btn btn-primary my-2 ml-3" :to="{name:'Single',params:{login:u.login} }">View Details</router-link>
            </div>
        </div>
        </div>
    </div>
</div>
 
     
          
      </div>
    
 
</template>

<script>
import axios from 'axios';
import Search from './Search';
export default {
name:'UserList',
components:{
Search
},
data(){
    return{
       user: [],
       new_user: null,
       loading:true,
       keyword:''
    }
},
created(){
    
    console.log('created')
    axios.get('http://api.github.com/users')
    .then(res=>{
       
        this.user = res.data
        // console.log(res.data)
        console.log(this.user)
       
    })
    // console.log(this.user)
},
methods:{
    single(id){
        this.$router.push({name:'Single',params:{login:id}})
    },
    search(){
      
      
      
      axios.get(`https://api.github.com/users/${this.keyword}?
      client_id=6ce7666c25943e179005&client_secret=2bc911507cd7c6ed23048ee8776ae631c74a5b1c`)
        .then(res=>{
            this.new_user = res.data

            console.log(res.data)
            console.log(this.new_user)
        })
        .catch(err=>{
            console.log(err)
        })
    }
}
}

</script>

<style>

</style>