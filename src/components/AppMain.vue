<script>
   import {store} from '../store';
   import AppMovieCards from './AppMovieCards.vue';
  export default {
    components:{
        AppMovieCards,
    },
    data() {
        return {
          store  
           
        }
    },
  }
</script>
<template >
  <div>
    <ul>
        <li>we</li>
        <li>we</li>
        <li>we</li>
        <li><AppMovieCards/></li>
    </ul>
  </div>
</template>
<style lang="scss">
@use '../styles/generals.scss' as*;
@use '../styles/partials/variables' as *
  
</style>