<template>
  <input type="text" class="input" v-model="message" @keydown.enter="send()">
  <div class="columns" v-for="(msg,index) in messages" :key="index">
    <div class="column is-half is-flex" :class="{'is-justify-content-end is-offset-half':msg.isME}">
        <div class="notification m-2 p-2 is-size-4" :class="{'is-info': !msg.isMe, 'is-primary': msg.isMe}">
            {{msg.text}}
        </div>
    </div>
  </div>
</template>

<script>
export default {
    mounted(){
        //public
        //this.ws = new WebSocket('ws://10.140.141.158:9000/');
        // kui tahad et poleks public
         this.ws = new WebSocket('ws://localhost:8080');
        // Connection opened
            this.ws.addEventListener('open', (event) => {
        });

// Listen for messages
            this.ws.addEventListener('message', (event) => {
            console.log(event.data);
            this.messages.push({text: event.data, isMe: false});
        });
    },
    data(){
        return{
            message: '',
            ws: null,
            messages: [
               // {text: 'sasd0', isMe: true},
               // {text: 'sadsad', isMe: false},
               // {text: 'sasd', isMe: true},
            ]
        }
    },
    methods:{
        send(){
            this.ws.send(this.message);
            this.messages.push({text: this.message, isMe: true});
            this.message='';
        }
    }
}
</script>

<style scoped>
    .notification{
        width: fit-content;
    }
</style>