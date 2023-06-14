<template>
    <div class="center mt-8">
        <h1>Le bot est maintenant actif</h1>
    </div>
</template>

<script>

import { db} from '@/main';
import { ref } from 'vue';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { query, collection, onSnapshot, where, setDoc, doc, runTransaction, arrayUnion  } from 'firebase/firestore'
import moment from 'moment';
import 'tmi.js';


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
              // This will be a "population is too big" error.
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
        username: 'ticharlez34',
        password: '6wv1fhnes5c8kuuazi6awmuzwgxjnu'
    },
    channels: [ 'ticharlez34' ]
});

client.connect();

const users = {};

/* Variable a changer  */

var chance = 15; /* Chance de drop (ex: 15 = 0 à 15) */
var chiffrePourDrop = 2; /* Chiffre que les gens qui ont attaquer doivent avoir pour drop l'item du mob  */
var item = 1; /* Rareté de l'item dropper (1 ou 2 pour l'instant. Plus le chiffre est gros plus l'item est rare)*/

/* IMPORTANT!! Pour que le monstre drop exemple un helmet. 
Vous devez changez à la Ligne 159 le premier mot pour helmets (6 choix d'items: swords|helmets|armours|necklaces|shoes|gloves ) */

const nom = "Slime"; /* Nom du mob */
const vie = 300; /* Nombre de point de vie */
const xpDonner = 30; /* Nombre d'expérience que le mob donne lorsque tué */
const tempsAvantAtk = 10 /* nombre de temps que les chatteurs doivent attendre avant de réattaquer le même monstre */

/* FIN --- Variable a changer ---  */


client.on('message', (channel, tags, message, self) => {
	
    if (message === '!attack'){
        const sfDocRef2  = doc(db, "warriors", tags['display-name'].toLowerCase());

        const sfDragonRef  = doc(db, "bosses", "Dragon");


        runTransaction(db, async (transaction) => {
            const sfDoc2 = await transaction.get(sfDocRef2);
            const sfDragon = await transaction.get(sfDragonRef);

            const today = new Date();
            const todayS = today.toString();
            const tie = Date.parse(todayS);
     
            var canAtk = new Date();
            var newDateObj = moment(canAtk).add(tempsAvantAtk, 'm').toDate();
            const newDate = Date.parse(newDateObj);

            var whenAtk = sfDoc2.data().canAttack; 

            if(tie >= whenAtk){
            
                const dmg = sfDoc2.data().atk + (sfDoc2.data().equipSword * 5) + (sfDoc2.data().equipArmour * 2) + (sfDoc2.data().equipGlove * 2) + (sfDoc2.data().equipShoes * 2) + (sfDoc2.data().equipHelmet * 2) + (sfDoc2.data().equipNecklace * 3);
                const newPop2 = sfDragon.data().HP - dmg;

                if (newPop2 > 0 && sfDragon.data().active == 1){
                    transaction.update(sfDragonRef, { HP: newPop2 });
                    transaction.update(sfDocRef2, { canDrop: 1, canAttack: newDate });       
                    return client.say(channel, `(-${dmg}) le ${sfDragon.data().name} à ${newPop2} vie restant`);
                }
        
            if(newPop2 <= 0 && sfDragon.data().active == 1){
                transaction.update(sfDragonRef, { HP: 0, active: 0 });
                transaction.update(sfDocRef2,{ canDrop: 1 });
                db.collection("warriors").get().then(function(querySnapshot) {
                    querySnapshot.forEach(function(doc) {
                        var random = Math.ceil(Math.random()*chance);
                        var xp = doc.data().exp + sfDragon.data().giveXP;

                        if(random == chiffrePourDrop && doc.data().canDrop == 1){
                            doc.ref.update({
                            canDrop: 0,
                            gloves: arrayUnion(item),
                            exp: xp
                            }) 
                            return client.say(channel,`@${doc.data().name} Vient de drop des gloves t1!`); 
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
        }
        else{
            return client.say(channel,  `@${tags.username} Vous devez attendre au moins ${tempsAvantAtk} minutes avant de lancer une nouvelle attaque.`);
        }

        });
    }		

    if (message === '!showHP'){
        const sfDocRef  = doc(db, "bosses", "Dragon");
        runTransaction(db, async (transaction) => {
            const sfDoc = await transaction.get(sfDocRef);
        
            if (!sfDoc.exists()) {
                return client.say(channel, `Aucun monstre n'est disponible`);
            }

            if (sfDoc.data().active == 1){
                return client.say(channel, `@${tags.username}, le ${sfDoc.data().name} à encore ${sfDoc.data().HP} point de vie!`);
            }
            else{
                return client.say(channel, `Aucun monstre n'est disponible`);
            }      
        })
    }

    if (message === '!create'){

        const sfDocRef2  = doc(db, "warriors", tags['display-name']);

        runTransaction(db, async (transaction) => {
            
            const today = new Date();
            const todayS = today.toString();
            const tie = Date.parse(todayS);
            const docName = tags['display-name'].toLowerCase();
            const sfDoc = await transaction.get(sfDocRef2);

            if (!sfDoc.exists()) {
                setDoc(doc(db, "warriors", docName), {
                    name: docName,
                    atk: 5,
                    level: 1,
                    canDrop: 0,
                    item: 0,
                    random: 0,
                    exp: 0,
                    equipArmour: 0,
                    equipNecklace: 0,
                    equipShoes: 0,
                    equipSword: 0,
                    equipHelmet: 0,
                    equipGlove: 0,
                    gloves: [],
                    armours: [],
                    swords: [],
                    shoes: [],
                    necklaces: [],
                    helmets: [],
                    canAttack: tie
                });
                return client.say(channel, `@${tags.username} votre personnage à été créer`);
            }
            else{
                return client.say(channel, `Vous avez déjà un personnage`);
            }
        })
    }

    if (message === '!lvlUP'){

        const sfDocRef  = doc(db, "warriors", tags['display-name'].toLowerCase());
        
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
            else if(sfDoc.data().level >= 20){
                return client.say(channel, `@${tags.username} votre personnage à atteint le niveau maximum`);
            }
            else if(currentXP >= expNeed && sfDoc.data().level < 20){

                transaction.update(sfDocRef, { level: nextLevel, exp: removeXP, atk: currentAtk});
                return client.say(channel, `@${tags.username}, vient de monter au niveau ${nextLevel}`);
            }
            else{     
                return client.say(channel, `@${tags.username}, il te manque ${expForNextLvl}xp pour monter de niveau`);
            }           
        })
    }

    if (message === '!website'){
        return client.say(channel, `@${tags.username}, Lien pour votre personnage: https://shaxten.github.io/ticharlez34/`);
    }


    if (message === '!stats'){

        const sfDocRef  = doc(db, "warriors", tags['display-name'].toLowerCase());

        runTransaction(db, async (transaction) => {
            const sfDoc = await transaction.get(sfDocRef);

            const dmg = sfDoc.data().atk + (sfDoc.data().equipSword * 5) + (sfDoc.data().equipArmour * 2) + (sfDoc.data().equipGlove * 2) + (sfDoc.data().equipShoes * 2) + (sfDoc.data().equipHelmet * 2) + (sfDoc.data().equipNecklace * 3);
            
            if (!sfDoc.exists()) {
                return client.say(channel, `@${tags.username}, tu n'as pas de personnage, tu peux le créer avec la commande !create`);
            }
            else{
                return client.say(channel, `@${tags.username}, Niveau ${sfDoc.data().level} et à une attaque de ${dmg}`);
            }           
        })
    }

    if (message === '!spawn' && tags.username == 'ticharlez34'){
        const sfDocRef  = doc(db, "bosses", "Dragon");

        runTransaction(db, async (transaction) => {          
            const sfDoc = await transaction.get(sfDocRef);                

            if (sfDoc.data().active == 0){
                transaction.update(sfDocRef, { name: nom, HP: vie, active: 1, giveXP: xpDonner });
            
                return client.say(channel, `Un ${nom} apparait ${vie} point de vie`);
            }
            else{
                return client.say(channel, `Il y a déjà un monstre qui attaque`);
            }
        })

    }
});

</script>