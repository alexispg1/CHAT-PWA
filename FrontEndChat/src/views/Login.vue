<template>
    <div class="login-form">
        <form v-on:submit.prevent="login">
            <h2 class="text-center">Log in</h2>       
            <div class="form-group">
                <input type="email" v-model="user.email" class="form-control" placeholder="email adress" required="required">
            </div>
            <div class="form-group">
                <input type="password" v-model="user.password" class="form-control" placeholder="Password" required="required">
            </div>
            <div class="form-group">
                <button type="submit"  class="btn btn-primary btn-block">sing up</button>
            </div>
            <div class="clearfix">
                <label class="pull-left checkbox-inline"></label><br/>
                <a href="/forgotPassword" class="pull-right">Forgot Password?</a>
            </div>        
        </form>
        <p class="text-center"><a href="/Register">Create an Account</a></p>
    </div>
</template>

<script>
import axios from 'axios';

export default{
    data(){
        return{
            url:'https://chatjkl.herokuapp.com/api/v1/',
            user:{
                email:'',
                password:'',
            }
          
              
        }
    },
    methods:{
        login:function(){
            axios.post(this.url+"user/login",this.user)
            .then(response =>{
                this.logsSuccess();
                this.$router.push("/Chat");
                localStorage.setItem("username",JSON.stringify(response.data.user.username));
                localStorage.setItem("email",JSON.stringify(response.data.user.email));
            }).catch(error =>{
                alert("error "+error.response);
                this.logs();
            })
        },
        logs:function(){
           var gmail=this.user.email;
           this.user.email="";
           this.user.password="";
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
           this.user.email="";
           this.user.password="";
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

<style >
.login-form {
    width: 500px;
    margin: 100px auto;
}
.login-form form {
    margin-bottom: 15px;
    background: #f7f7f7;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    padding: 30px;
}
.login-form h2 {
    margin: 0 0 15px;
}

.form-control, .btn {
    min-height: 38px;
    border-radius: 2px;
    }
.btn {        
    font-size: 15px;
    font-weight: bold;
    }


    .message-bubble 
{
    padding: 10px 0px 10px 0px;
}

.message-bubble:nth-child(even) { background-color: #F5F5F5; }

.message-bubble > *
{
    padding-left: 10px;    
}

.panel-body { padding: 0px; }

.panel-heading { background-color: #3d6da7 !important; color: white !important; }


</style>
