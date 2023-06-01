import { initializeApp } from 'firebase/app';
import {ref, onUnmounted} from 'vue';

const firebaseConfig = {
  apiKey: "AIzaSyCFoWXWUQrM2LSbBQ8l0YLwMXob3BfCEQU",
  authDomain: "character-eebeb.firebaseapp.com",
  databaseURL: "https://character-eebeb-default-rtdb.firebaseio.com",
  projectId: "character-eebeb",
  storageBucket: "character-eebeb.appspot.com",
  messagingSenderId: "970965837555",
  appId: "1:970965837555:web:daaf738b4f273f549e3986"
};

  const firebaseApp = initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const userCollection = db.collection('users');

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

  export const deleteUser = id => {
    return userCollection.doc(id).delete();
  };

  export const useLoadUsers = () => {
    const users = ref([]);
    const close = userCollection.onSnapshot(snapshot => {
        users.value = snapshot.docs.map(doc => ({id: doc.id, ...doc.data() }));
    })
    onUnmounted(close);
    return users;
  };