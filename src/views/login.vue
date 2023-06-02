<template>
    <div id="form">
        <h2 style="margin-bottom:2rem">Connectez-vous</h2>
          <p><input type="email" placeholder="email" v-model="email" /></p>
          <p><input type="password" placeholder="Password" v-model="password" /></p>
          <p v-if="errMsg">{{ errMsg }}</p>
          <button @click="login">Sign in</button>
    </div>
  
    <form @submit.prevent="onSubmit">
       <div id="form">
          <h2 style="margin-bottom:2rem">Pour le email veuillez utiliser votre nom de twitch suivi de @hotmail.com <br /> sinon vous ne verez pas votre personnage!</h2>
            <p><input type="email" placeholder="email" v-model="email2" /></p>
            <p><input type="password" placeholder="Password" v-model="password2" /></p>
            <button type="submit" @click="register">Create account</button>
      </div>       
      </form>
  </template>
  
  
  <script setup>
  
  import {ref} from "vue";
  import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
  import { useRouter } from 'vue-router'
  const router = useRouter();
  const email = ref("");
  const password = ref("");

  const email2 = ref("");
  const password2 = ref("");
  const errMsg = ref();
  
  const login = () => {
      signInWithEmailAndPassword(getAuth(), email.value, password.value)
      .then((data) => {
          console.log('Successfully sign in!');
          router.push('/ticharlez34/');
      }).catch((error) => {
          console.log(error.code);
          switch (error.code){
              case "auth/invalid-email":
                  errMsg.value = "Invalid email";
                  break;
              case "auth/user-not-found":
                  errMsg.value = "No account whit that email was found";
                  break;
              case "auth/wrong-password":
                  errMsg.value = "Incorrect password";
                  break;
              default:
                  errMsg.value = "Email or password was incorrect";
                  break;           
          }
      })
  };
  
  const register = () => {
        createUserWithEmailAndPassword(getAuth(), email2.value, password2.value)
        .then((data) => {
              console.log('Successfully registered!');
              router.push('/ticharlez34/');
   
        }).catch((error) => {
            console.log(error.code);
            alert(error.message);
        })
    };
  
  </script>