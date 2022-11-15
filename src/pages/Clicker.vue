<template>
  <div class="columns">
    <div class="column is-one-third has-text-centered">
        <b>{{displayDoggies}} Doggies🐕</b>
        <br>
        <b>{{displayCps}} DPS(doggies per second)</b>
        <img @click="doggiesClick()" :class="{'click': clickClass}"  src="https://www.pngmart.com/files/11/Doge-Meme-Transparent-PNG.png">
    </div>
    <section class="shop-container">
        <h2 class="pad">Store</h2>
        <div class="store-list">
        </div>
        <br>
        <div class="columnye">
        <button @click="upgrade(0.1,10)" class="button is-danger is-medium is-fullwidth" :disabled="doggies <=9" onclick="" >Buy 0.1 dps for 10 🐕</button>
        <br>
        <button @click="upgrade(0.5,50)" class="button is-danger is-medium is-fullwidth" :disabled="doggies <=49" onclick="" >Buy 0.5 dps for 50 🐕</button>
        <br>
        <button @click="upgrade(1,100)" class="button is-danger is-medium is-fullwidth" :disabled="doggies <=99">Buy 1 dps for 100 🐕</button>
        <br>
        <button @click="upgrade(5,500)" class="button is-danger is-medium is-fullwidth" :disabled="doggies <=499">Buy 5 dps for 500 🐕</button>
        <br>
        <button @click="upgrade(10,1000)" class="button is-danger is-medium is-fullwidth" :disabled="doggies <=999">Buy 10 dps for 1k 🐕</button>
        <br>
        <button @click="upgrade(50,5000)" class="button is-danger is-medium is-fullwidth" :disabled="doggies <=4999">Buy 50 dps for 5k 🐕</button>
        <br>
        <button @click="upgrade(100,10000)" class="button is-danger is-medium is-fullwidth" :disabled="doggies <=9999">Buy 100 dps for 10k 🐕</button>
        <br>
        <button @click="upgrade(1000,100000)" class="button is-danger is-medium is-fullwidth" :disabled="doggies <=99999">Buy 1k dps for 100k 🐕</button>
        <br>
        <button @click="upgrade(10000,1000000)" class="button is-danger is-medium is-fullwidth" :disabled="doggies <=999999">Buy 10k dps for 1M 🐕</button>
        <br>
        <button @click="upgrade(100000,10000000)" class="button is-danger is-medium is-fullwidth" :disabled="doggies <=9999999">Buy 100k dps for 10M 🐕</button>
        <br>
        <button @click="upgrade(1000000,100000000)" class="button is-danger is-medium is-fullwidth" :disabled="doggies <=99999999">Buy 1M dps for 100M 🐕</button>
        <br>
        <button @click="upgrade(10000000,1000000000)" class="button is-danger is-medium is-fullwidth" :disabled="doggies <=999999999">Buy 10M dps for 1B 🐕</button>
        <br> 
    </div>
    </section>
  </div>
  <div class="doggies_n_cps_background"></div>
</template>

<script>



export default {

    created(){
        setInterval(() => {
            this.doggies += this.cps;
            this.doggies = parseFloat (this.doggies.toFixed(1));
        }, 1000);
    },
    data(){
        return {
            clickClass:false,
            doggies: 0,
            cps: 0,
        }
    },
    computed:{
        displayDoggies(){
            return parseFloat(this.doggies.toFixed(1));
        },
        displayCps(){
            return parseFloat(this.cps.toFixed(1));
    },
},
    methods:{
            doggiesClick(){
                this.doggies++;
                this.clickClass = true;
                setTimeout(()=> {
                    this.clickClass = false;
                }, 50);
            },
            upgrade(cps, cost){
                if(this.doggies >= cost){
                    this.doggies -= cost;
                    this.cps += cps;
                }
            },
        },
}
</script>

<style scoped>
img{
    margin-top: 40%;
    animation-name: floating;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
}

img.click {
    transition: 1s;
    animation: floating2;
    animation-duration: 0.5s;
    
}
.doggies_n_cps_background {
    background-color: rgba(255,105,180, 0.8);
    width: 2000px;
    height: 120px;
    margin-top: -52%;
    margin-left: -20%;
    
}

b {
    color: white;
    font-size: 24px;
    
}
.column{
    margin-left: 35%;
    margin-top: -4%;
}

    .shop-container {
    position:relative;
    color: white;
    width: 500px;
    overflow-y: scroll;
    height: 577.5px;
    top: 90px;
    left: 14%;
    
    
    
}

    .shop-container::before {
        position: absolute;
        content: "X";
        top: 0;
        left: 0;
        padding: 15px 30px;
        transform: translateX(-100%);
        z-index: 1000;
        
    }

    h2{
        text-align: center;
        font-size: 24px;
        font-weight: bold;
        background: rgba(255,105,180, 0.8);
    }

    .pad {
        padding: 15px 30px;
    }

    .store-list {
        display: flex;
        flex-direction: column;
        overflow-y:auto;
    }

    @keyframes floating {
0% { transform: translate(0,  0px); }
50%  { transform: translate(0, 15px); }
100%   { transform: translate(0, -0px); }   
}

@keyframes floating2 {
0% { transform: translate(0,  0px); }
50%  { transform: translate(0, 10px); }
100%   { transform: translate(0, -0px); }   
}

    
</style>