<template>
    <div class="login-form">
        <form v-on:submit.prevent="register">
            <h2 class="text-center">Register</h2>  

            <div class="form-group">
                <input type="tex" v-model="user.username" class="form-control" placeholder="user name" required="required">
            </div>

            <div class="form-group">
                <input type="email" v-model="user.email" class="form-control" placeholder="email adress" required="required">
            </div>
            <div class="form-group">
                <input type="password"  v-model="user.password" class="form-control" placeholder="Password" required="required">
            </div>

            <div class="form-group">
                <button type="submit"  class="btn btn-primary btn-block">sig in </button>
            </div>
            <div class="clearfix">
                <label class="pull-left checkbox-inline"></label><br/>
                <a href="/login" class="pull-right">go back</a>
            </div>        
        </form>
    </div>
</template>


<script>
import axios from 'axios';
export default {
    
    name:"register",
    data(){
        
        return{
            url:'https://chatjkl.herokuapp.com/api/v1/',
            user:{
                username:'',
                password:'',
                email:'',
            },
           
        }
    },
    methods:{
        register:function(){
            axios.post(this.url+"user/register",this.user)
			.then(response=>{
                this.$router.push("/Chat");
                localStorage.setItem('username',JSON.stringify(response.data.user.username));
                localStorage.setItem("email",JSON.stringify(response.data.user.email));
                this.logsSuccess();  
			})
			.catch(e=>{
                alert("error "+e);
                this.logsError();
			})
        
        },
        logsError:function(){
           var gmail=this.user.email;
           var userx={
               username:gmail,
               error:'Request failed with status code 500',
           }
           axios.post(this.url+"user/logs",userx)
           .then(response=>{

           }).catch(error =>{

           })
        },
        logsSuccess:function(){
           var gmail=this.user.email;
           var userx={
               username:gmail,
               error:'reuquest success',
           }
           axios.post(this.url+"user/logs",userx)
           .then(response=>{

           }).catch(error =>{

           })
        },
    }
}
</script>