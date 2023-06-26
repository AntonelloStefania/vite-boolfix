<script>
import { store } from '../store';
  export default {
    data(){
        return{
            store
        }
    }, computed:{
 
    }
  }
</script>
<template >
  <div class="container">
    <div class="row">
        <div class="col-12">
            <h1>boolfix </h1>
            <div class="">
                <input type="text" placeholder="search" v-model="store.movieSearch" @keyup.enter="$emit('search')" >
                <button class="btn btn-primary" @click="$emit('search')">search</button>
            </div>
        </div>
    </div>
  </div>
</template>
<style lang="scss">
  
</style>