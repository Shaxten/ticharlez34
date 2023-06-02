<template>
    <form @submit.prevent="onSubmit">
     <div id="form">
        <h2 style="margin-bottom:2rem;">Pour le email veuillez utiliser votre nom de twitch suivi de @hotmail.com <br /> sinon vous ne verez pas votre personnage!</h2>
          <p><input type="email" placeholder="email" v-model="email" /></p>
          <p><input type="password" placeholder="Password" v-model="password" /></p>
          <button type="submit" @click="register">Create account</button>
    </div>       
    </form>

  </template>
  
  <script setup>
  
  import {ref} from "vue";
  import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";
  import { useRouter } from 'vue-router'
  import { reactive } from 'vue'
  
  const router = useRouter();
  
  const email = ref("");
  const password = ref("");
  

  const register = () => {
      createUserWithEmailAndPassword(getAuth(), email.value, password.value)
      .then((data) => {
            console.log('Successfully registered!');
            router.push('/ticharlez34/');
 
      }).catch((error) => {
          console.log(error.code);
          alert(error.message);
      })
  };
  </script>
