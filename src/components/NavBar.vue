

<template>
  <nav class="navbar">
    <div class="navImg">
      <router-link to="/ticharlez34/"><img src="/src/assets/img/logo.png" /></router-link>
    </div>
    <div class="navItem">
      <a href="/ticharlez34/#stream">Stream</a>
      <router-link id="twitch" to="/ticharlez34/twitch">Personnage</router-link>
      <router-link id="login" to="/ticharlez34/login">LogIn</router-link>
      <a href="#" @click="handleSignOut" v-if="isLoggedIn">Sign out</a>
      <p hidden id="character2"></p>
    </div>
  </nav>
</template>

<script setup>

import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { onMounted, ref } from "vue";
import { useRouter } from 'vue-router';

const router = useRouter();

const isLoggedIn = ref(false);
let auth;

onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user){
      isLoggedIn.value = true;
      document.getElementById('login').style.display = "none";
      document.getElementById('character2').innerHTML = user.email;
    } else{
      isLoggedIn.value = false;
      document.getElementById('login').style.display = "initial";
    }
  });
});

const handleSignOut = () =>{
  signOut(auth).then(() => {
    router.push('/ticharlez34/');
  })
};
</script>

