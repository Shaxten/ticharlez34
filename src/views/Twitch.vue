<template>
    <div class="center mt-8">
        <div v-if="users <= 0">
            <button class="boutonC" @click="getUsers">Voir votre personnage</button>   
        </div>

        <div class="characterSlot" v-for="(user) in users" :key="user.name">
            <div class="left">
            <h1 class="name">{{ user.name }}</h1>   

            <div class="containerEquip">

                <div class="equipLeft">
                    <div>
                        <img id="helmet" class="imgEquip" src="https://raw.githubusercontent.com/Shaxten/ticharlez34/main/src/assets/img/armour/armour0.jpg" />           
                    </div>
                    <div>
                        <img id="glove" class="imgEquip" src="https://raw.githubusercontent.com/Shaxten/ticharlez34/main/src/assets/img/glove/glove0.jpg" />           
                    </div>
                    <div>
                        <img id="sword" class="imgEquip" src="https://raw.githubusercontent.com/Shaxten/ticharlez34/main/src/assets/img/sword/sword0.jpg"/>     
                    </div>
                </div>

                <div class="equipMid">
                    <div>
                        <img class="imgPlayer" src="/src/assets/img/boi.jpg" />
                    </div>
                </div>

               <div class="equipRight">
                    <div>
                        <img id="necklace" class="imgEquip" src="https://raw.githubusercontent.com/Shaxten/ticharlez34/main/src/assets/img/sword/sword0.jpg" />           
                    </div>
                    <div>
                        <img id="armour" class="imgEquip" src="https://raw.githubusercontent.com/Shaxten/ticharlez34/main/src/assets/img/sword/sword0.jpg" />
                    </div>  
                    <div>
                        <img id="shoes" class="imgEquip" src="https://raw.githubusercontent.com/Shaxten/ticharlez34/main/src/assets/img/sword/sword0.jpg" />           
                    </div>  
               </div>
               <a id="loading" class="load" @click="change(user.equipSword, user.equipGlove, user.equipHelmet, user.equipNecklace, user.equipArmour, user.equipShoes)">Charger l'équipement</a>
            </div> 
        </div>   
            <div class="right">
                <h1 class="invtitle">Inventaire</h1>

                <div class="mt-3">
                    <h1 v-if="user.helmets >= 1" class="itemTitle">Casques</h1>
                    <div class="inventory">
                       <div :id="'helmet' + helmet" v-for="helmet in user.helmets" :key="helmet"><img @click="equipHelmet(helmet)" class="invItem" v-bind:src="'https://raw.githubusercontent.com/Shaxten/ticharlez34/main/src/assets/img/helmet/helmet' + helmet + '.jpg'" /></div> 
                    </div>   

                    <h1 v-if="user.necklaces >= 1" class="itemTitle">Colliers</h1>
                    <div class="inventory">
                        <div :id="'necklace' + necklace" v-for="necklace in user.necklaces" :key="necklace"><img @click="equipNecklace(necklace)" class="invItem" v-bind:src="'https://raw.githubusercontent.com/Shaxten/ticharlez34/main/src/assets/img/necklace/necklace' + necklace + '.jpg'" /></div> 
                    </div>   
                    
                    <h1 v-if="user.armours >= 1" class="itemTitle">Plastron</h1>
                    <div class="inventory">
                       <div  :id="'armour' + armour" v-for="armour in user.armours" :key="armour"><img @click="equipArmour(armour)" class="invItem" v-bind:src="'https://raw.githubusercontent.com/Shaxten/ticharlez34/main/src/assets/img/armour/armour' + armour + '.jpg'" /></div> 
                    </div>   
                                              
                    <h1 v-if="user.gloves >= 1" class="itemTitle">Gants</h1>
                    <div class="inventory">
                        <div  :id="'glove' + glove" v-for="glove in user.gloves" :key="glove"><img @click="equipGlove(glove)" class="invItem" v-bind:src="'https://raw.githubusercontent.com/Shaxten/ticharlez34/main/src/assets/img/glove/glove' + glove + '.jpg'" /></div>
                    </div>   

                    <h1 v-if="user.shoes >= 1" class="itemTitle">Bottes</h1>
                    <div class="inventory">
                       <div  :id="'shoes' + shoes" v-for="shoes in user.shoes" :key="shoes"><img @click="equipShoes(shoes)" class="invItem" v-bind:src="'https://raw.githubusercontent.com/Shaxten/ticharlez34/main/src/assets/img/shoes/shoes' + shoes + '.jpg'" /></div> 
                    </div>   
                                              
                    <h1 v-if="user.swords >= 1" class="itemTitle">Armes</h1>
                    <div class="inventory">
                        <div  :id="'sword' + sword" v-for="sword in user.swords" :key="sword"><img @click="equipSword(sword)" class="invItem" v-bind:src="'https://raw.githubusercontent.com/Shaxten/ticharlez34/main/src/assets/img/sword/sword' + sword + '.jpg'" /></div>
                    </div>   
                </div>

            </div> 
        </div>
    </div>
</template>
  
<script>


import { db} from '@/main';
import { ref } from 'vue';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { query, collection, onSnapshot,getDocs , where, setDoc, writeBatch, doc, runTransaction  } from 'firebase/firestore'

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

            const q = query(collection(db, 'warriors'), where ('name', '==', afterWithout))
            const querySnap = await getDocs(q)

            querySnap.forEach((doc) => {
                this.users.push(doc.data())
            })
        },
        check(){
            const t = email.value;
            var afterWithout = t.replace('@hotmail.com', '');
            document.getElementById('check').innerHTML = afterWithout;
        },
        change(swordId, gloveId, helmetId, necklaceId, ArmourId, shoesId){     

            document.getElementById("sword").src = 'https://raw.githubusercontent.com/Shaxten/ticharlez34/main/src/assets/img/sword/sword' + swordId + '.jpg';
            document.getElementById("glove").src = 'https://raw.githubusercontent.com/Shaxten/ticharlez34/main/src/assets/img/glove/glove' + gloveId + '.jpg';
            document.getElementById("helmet").src = 'https://raw.githubusercontent.com/Shaxten/ticharlez34/main/src/assets/img/helmet/helmet' + helmetId + '.jpg';
            document.getElementById("necklace").src = 'https://raw.githubusercontent.com/Shaxten/ticharlez34/main/src/assets/img/necklace/necklace' + necklaceId + '.jpg';
            document.getElementById("armour").src = 'https://raw.githubusercontent.com/Shaxten/ticharlez34/main/src/assets/img/armour/armour' + ArmourId + '.jpg';
            document.getElementById("shoes").src = 'https://raw.githubusercontent.com/Shaxten/ticharlez34/main/src/assets/img/shoes/shoes' + shoesId + '.jpg';       
            
            document.getElementById('loading').style.display = "none";
        },
        equipSword(id){
            const t = email.value;
            var afterWithout = t.replace('@hotmail.com', '');
            const sfDocRef2  = doc(db, "warriors", afterWithout);
              
            runTransaction(db, async (transaction) => {
        
            transaction.update(sfDocRef2, { equipSword: id });
            document.getElementById("sword").src = 'https://raw.githubusercontent.com/Shaxten/ticharlez34/main/src/assets/img/sword/sword' + id + '.jpg';
            })   
        },
        equipHelmet(id){
            const t = email.value;
            var afterWithout = t.replace('@hotmail.com', '');
            const sfDocRef2  = doc(db, "warriors", afterWithout);
              
            runTransaction(db, async (transaction) => {
        
            transaction.update(sfDocRef2, { equipHelmet: id });
            document.getElementById("helmet").src = 'https://raw.githubusercontent.com/Shaxten/ticharlez34/main/src/assets/img/helmet/helmet' + id + '.jpg';
            })   
        },

        equipGlove(id){
            const t = email.value;
            var afterWithout = t.replace('@hotmail.com', '');
            const sfDocRef2  = doc(db, "warriors", afterWithout);
              
            runTransaction(db, async (transaction) => {
        
            transaction.update(sfDocRef2, { equipGlove: id });
            document.getElementById("glove").src = 'https://raw.githubusercontent.com/Shaxten/ticharlez34/main/src/assets/img/glove/glove' + id + '.jpg';
            })   
        },
        equipArmour(id){
            const t = email.value;
            var afterWithout = t.replace('@hotmail.com', '');
            const sfDocRef2  = doc(db, "warriors", afterWithout);
              
            runTransaction(db, async (transaction) => {
        
            transaction.update(sfDocRef2, { equipArmour: id });
            document.getElementById("armour").src = 'https://raw.githubusercontent.com/Shaxten/ticharlez34/main/src/assets/img/armour/armour' + id + '.jpg';
            })   
        },

        equipNecklace(id){
            const t = email.value;
            var afterWithout = t.replace('@hotmail.com', '');
            const sfDocRef2  = doc(db, "warriors", afterWithout);
              
            runTransaction(db, async (transaction) => {
        
            transaction.update(sfDocRef2, { equipNecklace: id });
            document.getElementById("necklace").src = 'https://raw.githubusercontent.com/Shaxten/ticharlez34/main/src/assets/img/necklace/necklace' + id + '.jpg';
            })   
        },
        equipShoes(id){
            const t = email.value;
            var afterWithout = t.replace('@hotmail.com', '');
            const sfDocRef2  = doc(db, "warriors", afterWithout);
              
            runTransaction(db, async (transaction) => {
        
            transaction.update(sfDocRef2, { equipShoes: id });
            document.getElementById("shoes").src = 'https://raw.githubusercontent.com/Shaxten/ticharlez34/main/src/assets/img/shoes/shoes' + id + '.jpg';
            })   
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

</script>
