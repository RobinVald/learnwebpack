<template>
    <img-modal v-if="active" @close="active=false" src="http://placekitten.com/800/1000"></img-modal>
<button class="button is-primary" @click="active=true">Open Modal</button>
<img-modal v-if="active2" @close="active2=false" src="https://placebear.com/800/1000"></img-modal>
<button class="button is-primary" @click="active2=true">Open Modal</button>
<img-modal v-if="active3" @close="active3=false" src="https://placebear.com/800/800"></img-modal>
<button class="button is-primary" @click="active3=true">Open Modal</button>
    
</template>

<script>
import ImgModal from '../components/imgModal.vue';
import Modal from '../components/Modal.vue';
export default {
    data() {
        return {
            active: false,
            active2:false,
            active3:false,
        };
    },
    components: { Modal, ImgModal }
}
</script>

<style>

</style>