<template>
  <div id="form">
        <p><input type="email" placeholder="email" v-model="email" /></p>
        <p><input type="password" placeholder="Password" v-model="password" /></p>
        <p v-if="errMsg">{{ errMsg }}</p>
        <button @click="register">Submit</button>
        
        <h3><a href="/ticharlez34/createAccount/">Create account</a></h3>
  </div>
</template>


<script setup>

import {ref} from "vue";
import { getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { useRouter } from 'vue-router'
const router = useRouter();
const email = ref("");
const password = ref("");
const errMsg = ref();

const register = () => {
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

</script>