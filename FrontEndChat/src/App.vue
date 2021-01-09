<template>
   <div >
     <div >
       <router-link to="/Login">cerrar secion</router-link>|
       <!--<button v-on:click="login" >ir </button>-->
      </div>
      <router-view/>
    </div>
</template>

<script >
import { Component, Vue } from 'vue-property-decorator';
import register from '@/views/Register.vue';

export default {
  components:{
    register,
  },
  data(){
    return{

    }
  },
  methods:{
    login:function(){

      this.$router.push('/Register');
      
    }
  }


}
</script>

