<template>
 
<div class="container">
		<div class="row mt-5">
			<div class="col-md-6 offset-md-3 col-sm-6 offset-sm-3 col-12 comments-main pt-4 rounded">
				<ul class="p-0">
					<li v-for="(item,index) in lista" v-bind:key="index" >
						<div class="row comments mb-2">
							<div class="col-md-2 col-sm-2 col-3 text-center user-img">
						    	<img id="profile-photo" src="http://nicesnippets.com/demo/man01.png" class="rounded-circle" />
							</div>
							<div class="col-md-9 col-sm-9 col-9 comment rounded mb-2">
								<h4 class="m-0"><a href="#"></a></h4>
							    <p class="text-black ml-3">{{item.name}}</p>
							    <p class="mb-0 text-white">{{item.message}}</p>
							</div>
						</div>
					</li>	
				</ul>
				<div class="row comment-box-main p-3 rounded-bottom">
			  		<div class="col-md-9 col-sm-9 col-9 pr-0 comment-box">
					  <input type="text"  v-model="messages" class="form-control" placeholder="message"/>
			  		</div>
            
          	<div class="col-md-9 col-sm-9 col-9 pr-0 comment-box" >
			  			<button v-on:click="sendMessages" type="button" class="btn btn-primary">Send messages</button>
              <button v-on:click="seeMessages" type="button" class="btn btn-secondary">See messages</button>
			  		</div>
        
			  	
				</div>
			</div>
		</div>
	</div>

  


</template>

<script>
import firebase from 'firebase';
import db from '../main.ts';
import router from '../router';
import axios from 'axios';
import VueCryptojs from 'vue-cryptojs';
import vueCrypt from 'vue-crypt'
//const Cryptr = require('cryptr');
//const cryptr = new Cryptr('myTotalySecretKey');
var CryptoJS = require("crypto-js");
export default {
    data(){
        return{
         url:'https://chatjkl.herokuapp.com/api/v1/',
         userName:'',
         email:'',
         messages:'',
         list:[],
         lista:[],
        }
    },
    mounted(){
        this.userName=JSON.parse(localStorage.getItem("username"));
        this.email=JSON.parse(localStorage.getItem("email"));
        
    },
    methods:{          
        sendMessages:function(){
           var textEncrypted = this.CryptoJS.AES.encrypt(JSON.stringify(this.messages),this.messages).toString();
           var bytes  = this.CryptoJS.AES.decrypt(textEncrypted.toString(),this.messages);
           var plaintext = bytes.toString(CryptoJS.enc.Utf8);
           let encrypted = this.$aes.encrypt(this.messages);
           let decrypted = this.$aes.decrypt(encrypted);
           var perro =CryptoJS.SHA512("Message").toString();
           var user={
             message:encrypted,
             email:this.email,
             name:this.userName,
           }   
           this.messages="";
           axios.post(this.url+"user/message",user)
           .then(reponse =>{
             this.seeMessages();
           })
           .catch(e =>{s
           })

        },
        seeMessages:function(){
          this.list=[];
          axios.get(this.url+"user/message/all")
          .then(response=>{
            this.list=response.data.messages;
            this.saveMessages(this.list);
          }).catch(e=>{

          });
          
        },
        saveMessages(list){
          this.lista=[];
          for (var i  in this.list) {
            var id=this.list[i].id;
            var email=this.list[i].email;
            var message=this.list[i].message;   
            var name=this.list[i].name;    
            var created_at=this.list[i].created_at;        
            var updated_at=this.list[i].updated_at;
            var decrypted = this.$aes.decrypt(message);
            var newMessages={
              id:id,
              name:name,
              email:email,
              message:decrypted,
              created_at:created_at,
              updated_at:updated_at
            }
            this.lista.push(newMessages);
          }
           
          
        }  
    }
}

</script>

<style >
body{
  font-family: 'Raleway', sans-serif;
  background: #E9ECE9;
}
.comments-main{
  background: #FFF;
} 
.comment time, .comment:hover time,.icon-rocknroll, .like-count {
  -webkit-transition: .25s opacity linear;
  transition: .25s opacity linear;
}
.comments-main ul li{
  list-style: none;
}
.comments .comment {
  padding: 5px 10px;
  background: #00AF90;
}
.comments .comment:hover time{
  opacity: 1;
}
.comments .user-img img {
  width: 50px;
  height: 50px;
}
.comments .comment h4 {
  display: inline-block;
  font-size: 16px;
}
.comments .comment h4 a {
  color: #404040;
  text-decoration: none;
}
.comments .comment .icon-rocknroll {
  color: #545454;
  font-size: .85rem;
}
.comments .comment .icon-rocknroll:hover {
  opacity: .5;
}
.comments .comment time,.comments .comment .like-count,.comments .comment .icon-rocknroll {
  font-size: .75rem;
  opacity: 0;
}
.comments .comment time, .comments .comment .like-count {
  font-weight: 300;
}
.comments .comment p {
  font-size: 13px;
}
.comments .comment p .reply {
  color: #BFBFA8;
  cursor: pointer;
}
.comments .comment .active {
  opacity: 1;
}
.icon-rocknroll {
  background: none;
  outline: none;
  cursor: pointer;
  margin: 0 .125rem 0 0;
}
.comments .comment:hover .icon-rocknroll,.comments .comment:hover .like-count {
  opacity: 1;
}
.comment-box-main{
  background: #CA1D5F;
}
@media (min-width: 320px) and (max-width: 480px){
  .comments .comment h4 {
    font-size: 12px;
  }
  .comments .comment p{
    font-size: 11px;
  }
  .comment-box-main .send-btn button{
    margin-left: 5px;
  }
}
</style>