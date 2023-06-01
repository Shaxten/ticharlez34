<template>
    <div class="center mt-8">
        <div v-if="users.length <= 0">
            <button class="boutonC" @click="getUsers">Voir votre personnage</button>   
        </div>
        <div v-show="users.length <= 0" class="mt-8">
            <h1 style="color:red;" id="erreur"></h1>
            <h1>Si n'as pas de personnage,<br /> crée en un maintenant!</h1>
            <button @click="createCharacter" class="boutonC" type="submit">Create character</button>                                 
        </div>

        <input hidden v-model="email" id="email" /> 
        <div v-show="users.length >= 1" v-for="user in users" :key="user.id">
            <p>{{ user.name }}</p>   
            <p id="attack">Damage: {{ user.atk }}</p>      
        </div>    
    </div>
</template>

<script>

import { db} from '@/main';
import { ref, nextTick } from 'vue';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { query, collection, onSnapshot,arrayUnion, where, setDoc, writeBatch, doc, runTransaction  } from 'firebase/firestore'

let auth;
const email = ref('test');


export default {

    data() {
        return { users: [], bosses: [] }
    },
    methods: {      
        async getUsers() {     
            const t = email.value;
            var afterWithout = t.replace('@hotmail.com', '');    
            onSnapshot(                
                query(collection(db, 'warriors'), where('name', '==', afterWithout)),
                (snap) => {
                    snap.forEach((doc) => {
                    this.users.push(doc.data())
                })
            });
        },
        async createCharacter(){
            const t = email.value;
            var afterWithout = t.replace('@hotmail.com', ''); 

            const sfDocRef = doc(db, "warriors", afterWithout);
            try {
            await runTransaction(db, async (transaction) => {
                const sfDoc = await transaction.get(sfDocRef);
                if (!sfDoc.exists()) {
                    setDoc(doc(db, "warriors", afterWithout), {
                        name: afterWithout,
                        atk: 5,
                        level: 1
                });
                }
                else{
                    document.getElementById('erreur').innerHTML = "Vous avez déjà un personnage!"
                }
              });
          
              
            } catch (e) {
              // This will be a "population is too big" error.s
              console.error(e);
            }
        },
        check(){
            const t = email.value;
            var afterWithout = t.replace('@hotmail.com', '');
            document.getElementById('check').innerHTML = afterWithout;
        }
    },

    setup() {

    },
    mounted() {
        auth = getAuth();
        onAuthStateChanged(auth, (user) => {
        if (user){          
            email.value = user.email;
            } else{

            }
        });
    }
}

const client = new tmi.Client({
    identity:{
        username: 'shaxten19',
        password: 'i1km9nex76bb1gbh44k7riuac8x966'
    },
	channels: [ 'shaxten19' ]
});

client.connect();

const users = {};

client.on('message', (channel, tags, message, self) => {
	
    if (message === '!attack'){
        const sfDocRef2  = doc(db, "warriors", tags['display-name']);
        const sfDocRef  = doc(db, "bosses", "HSOMmixhXaiu3EbwUHJo");

        const sfDragonRef  = doc(db, "bosses", "Dragon");


        runTransaction(db, async (transaction) => {
        const sfDoc = await transaction.get(sfDocRef);
        const sfDoc2 = await transaction.get(sfDocRef2);
        const sfDragon = await transaction.get(sfDragonRef);
        
        if (!sfDoc.exists()) {
            return client.say(channel, ``);
        }

        const newPop = sfDoc.data().HP - sfDoc2.data().atk;

        const newPop2 = sfDragon.data().HP - sfDoc2.data().atk;

        if (newPop > 0 && sfDoc.data().active == 1){
            transaction.update(sfDocRef, { HP: newPop });
            transaction.update(sfDocRef2, { canDrop: 1 });
        
            return client.say(channel, `(-${sfDoc2.data().atk}) le ${sfDoc.data().name} à ${newPop} vie restant`);
        }

        else if (newPop2 > 0 && sfDragon.data().active == 1){
            transaction.update(sfDragonRef, { HP: newPop2 });
            transaction.update(sfDocRef2, { canDrop: 1 });
        
            return client.say(channel, `(-${sfDoc2.data().atk}) le ${sfDragon.data().name} à ${newPop2} vie restant`);
        }

        else if(newPop <= 0 && sfDoc.data().active == 1){
            transaction.update(sfDocRef, { HP: 0, active: 0 });
            transaction.update(sfDocRef2,{ canDrop: 1 });
            db.collection("warriors").get().then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    var random = Math.ceil(Math.random()*2);
                    var xp = doc.data().exp + sfDoc.data().giveXP;
                   
                    if(random == 1 && doc.data().canDrop == 1 || random == 45 && doc.data().canDrop == 1 || random == 19 && doc.data().canDrop == 1){
                        doc.ref.update({
                        canDrop: 0,
                        item: 1,
                        exp: xp
                        }) 
                    }
                    else if(random == 2 && doc.data().canDrop == 1){
                        doc.ref.update({
                        canDrop: 0,
                        item: 2,
                        exp: xp
                        })  
                    }
                    else if(doc.data().canDrop == 1){
                    doc.ref.update({
                        canDrop: 0,
                        random: random,
                        exp: xp
                        })     
                    }
                    else{
                
                    }

                });
            });
    
            return client.say(channel, `Le ${sfDoc.data().name} à été tué par @${tags.username}`);
        }
        
        else if(newPop2 <= 0 && sfDragon.data().active == 1){
            transaction.update(sfDragonRef, { HP: 0, active: 0 });
            transaction.update(sfDocRef2,{ canDrop: 1 });
            db.collection("warriors").get().then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {

                    var chance = 1;
                    var item = 1;
                    var chiffrePourDrop = 1;

                    var random = Math.ceil(Math.random()*chance);
                    var xp = doc.data().exp + sfDragon.data().giveXP;

                    if(random == chiffrePourDrop && doc.data().canDrop == 1 || random == 0 && doc.data().canDrop == 1){
                        doc.ref.update({
                        canDrop: 0,
                        swords: arrayUnion(item),
                        exp: xp
                        })  
                    }
                    else if(doc.data().canDrop == 1){
                    doc.ref.update({
                        canDrop: 0,
                        random: random,
                        exp: xp
                        })     
                    }
                    else{
                
                    }

                });
            });
    
            return client.say(channel, `Le ${sfDragon.data().name} à été tué par @${tags.username}`);
        }

        else{
            return client.say(channel, `Aucun monstre n'est disponible`);
        }

        });
    }

    if (message === '!showHP'){
        const sfDocRef  = doc(db, "bosses", "HSOMmixhXaiu3EbwUHJo");
        runTransaction(db, async (transaction) => {
        const sfDoc = await transaction.get(sfDocRef);
        
        if (!sfDoc.exists()) {
            throw "Document does not exist!";
        }

        if (sfDoc.data().active == 1){
            return client.say(channel, `@${tags.username}, le ${sfDoc.data().name} à encore ${sfDoc.data().HP} point de vie!`);
        }else{
            return client.say(channel, `Aucun monstre n'est disponible`);
        }
        

        })
    }

    if (message === '!create'){

        const sfDocRef2  = doc(db, "warriors", tags['display-name']);

        runTransaction(db, async (transaction) => {

            const sfDoc = await transaction.get(sfDocRef2);
            if (!sfDoc.exists()) {
                setDoc(doc(db, "warriors", tags['display-name']), {
                    name: tags['display-name'],
                    atk: 5,
                    level: 1,
                    canDrop: 0,
                    item: 0,
                    random: 0,
                    exp: 0
                });
                return client.say(channel, `@${tags.username} votre personnage à été créer`);
                }
                else{
                    return client.say(channel, `Vous avez déjà un personnage`);
                }
        })
    }

    if (message === '!stats'){

        const sfDocRef  = doc(db, "warriors", tags['display-name']);

        runTransaction(db, async (transaction) => {
        const sfDoc = await transaction.get(sfDocRef);
        
        if (!sfDoc.exists()) {
            return client.say(channel, `@${tags.username}, tu n'as pas de personnage, tu peux le créer avec la commande !create`);
        }
        else{
            return client.say(channel, `@${tags.username}, Niveau ${sfDoc.data().level} et à une attaque de ${sfDoc.data().atk}`);
        }           
    })
    }

    if (message === '!lvlUP'){

        const sfDocRef  = doc(db, "warriors", tags['display-name']);
        
        runTransaction(db, async (transaction) => {
        const sfDoc = await transaction.get(sfDocRef);
        
        var currentXP = sfDoc.data().exp;
        var expNeed = sfDoc.data().level * 20;
        var expForNextLvl = expNeed - currentXP;
        var nextLevel = sfDoc.data().level + 1;

        var removeXP = currentXP - expNeed;
        var currentAtk = sfDoc.data().atk + 5;

        if (!sfDoc.exists()) {
            return client.say(channel, `@${tags.username}, tu n'as pas de personnage, tu peux le créer avec la commande !create`);
        }
        else if(currentXP >= expNeed){

            transaction.update(sfDocRef, { level: nextLevel, exp: removeXP, atk: currentAtk});
            return client.say(channel, `@${tags.username}, vient de monter au niveau ${nextLevel}`);
        }
        else{     
            return client.say(channel, `@${tags.username}, il te manque ${expForNextLvl}xp pour monter de niveau`);
        }           
        })
    }

    if (message === '!spawn Golem' && tags.username == 'shaxten19'){
        const sfDocRef  = doc(db, "bosses", "HSOMmixhXaiu3EbwUHJo");

        runTransaction(db, async (transaction) => {
            const sfDoc = await transaction.get(sfDocRef);           

            if (sfDoc.data().active == 0){
                transaction.update(sfDocRef, { HP: 50, active: 1, giveXP: 5 });
            
                return client.say(channel, `Le Golem revient en force avec 50 point de vie`);
            }
            else{
                return client.say(channel, `Il y a déjà un monstre qui attaque`);
            }
        })

    }

    if (message === '!spawn' && tags.username == 'shaxten19'){
        const sfDocRef  = doc(db, "bosses", "Dragon");

        runTransaction(db, async (transaction) => {
            const sfDoc = await transaction.get(sfDocRef);           

            if (sfDoc.data().active == 0){
                transaction.update(sfDocRef, { name: "Elf", HP: 125, active: 1, giveXP: 5 });
            
                return client.say(channel, `Un Elf apparait 125 point de vie`);
            }
            else{
                return client.say(channel, `Il y a déjà un monstre qui attaque`);
            }
        })

    }
});
</script>

