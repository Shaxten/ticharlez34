import './assets/main.css'

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import firebase from 'firebase/compat/app';
import { getAuth } from 'firebase/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCFoWXWUQrM2LSbBQ8l0YLwMXob3BfCEQU",
    authDomain: "character-eebeb.firebaseapp.com",
    databaseURL: "https://character-eebeb-default-rtdb.firebaseio.com",
    projectId: "character-eebeb",
    storageBucket: "character-eebeb.appspot.com",
    messagingSenderId: "970965837555",
    appId: "1:970965837555:web:daaf738b4f273f549e3986"
  };
  
const fire = firebase.initializeApp(firebaseConfig);


export const db = fire.firestore(firebaseConfig.apiKey, firebaseConfig.authDomain, firebaseConfig.databaseURL, firebaseConfig.projectId, firebaseConfig.storageBucket, firebaseConfig.messagingSenderId, firebaseConfig.appId);
const userCollection = db.collection('users');

const bossCollection = db.collection('bosses');

export const createUser = user => {
  return userCollection.add(user);
};

export const getUser = async id => {
  const user = await userCollection.doc(id).get();
  return user.exists ? user.data() : null;
};

export const updateUser = (id, user) => {
  return userCollection.doc(id).update(user);
};


export const getBoss = async id => {
  const user = await bossCollection.doc(id).get();
  return user.exists ? user.data() : null;
};

export const updateBoss = (id, user) => {
  return bossCollection.doc(id).update(user);
};

export const auth = getAuth(fire);

const app = createApp(App);

app.use(router);

app.mount("#app");

