<script>
  import axios from 'axios';
  import AppHeader from './components/AppHeader.vue';
  import AppMain from './components/AppMain.vue';
  import { store } from './store';
  export default {
    components:{
      AppHeader,
      AppMain
    },
    data(){

    },mounted(){
      axios.get(store.movieUrl).then((response)=> {
      store.movieList = response.data.results
      console.log(store.movieList)
    })
  }
  }
</script>
<template >
  <div>
    <AppHeader/>
    <AppMain/>
  </div>
</template>
<style lang="scss">
  
</style>