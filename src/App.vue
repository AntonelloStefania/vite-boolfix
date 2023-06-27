<script>
  import axios from 'axios';
  import AppHeader from './components/AppHeader.vue';
  import AppMain from './components/AppMain.vue';
  import AppMovieCards from './components/AppMovieCards.vue';
  import AppFilters from './components/AppFilters.vue';
  import { store } from './store';
  export default {
    components:{
      AppHeader,
      AppMain,
      AppMovieCards,
      AppFilters,
    },
    data(){
      return{
        store
      }
    },methods: {
      searchMovie(){
        if(store.movieList !== ''){
          let filteredUrl =store.movieUrl + store.name_search + store.movieSearch
          console.log(filteredUrl)  
          axios.get(filteredUrl).then((response)=> {
            store.movieList = response.data.results
            console.log(store.movieList)
        })  
        }
      },
    },
  
 
  }
</script>
<template >
  <div>
    <AppHeader @search="searchMovie()"/>
    <AppFilters />
    <AppMain/>
  </div>
</template>
<style lang="scss">
@use './styles/generals.scss' as *
  
</style>