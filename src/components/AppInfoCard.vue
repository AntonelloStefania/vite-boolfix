<script>
import {store} from '../store'
    export default {
        props:{
            myCast : Object
        },
        data() {
            return {
               store 
            }
        },methods: {
           
        }, mounted() {
            
        },
    }
</script>
<template >
    <div>
        <div class="">
            <ul>
                <li >
                    <div class="d-flex align-items-center mb-3">
                        <img :src="`${store.profile_img_path}${this.myCast.profile_path}`" alt="" class="me-3">
                        <div class="d-flex flex-column">
                            <h5 class="">{{ this.myCast.name }}</h5>
                            <span class="">nel ruolo di: {{ this.myCast.character}}</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<style lang="scss">
@use '../styles/generals.scss' as *;
@use '../styles/partials/variables' as *;

img{
    border-radius: 5rem;
}
    
</style>