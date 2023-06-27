<script>
  import axios from 'axios';
  import AppHeader from './components/AppHeader.vue';
  import AppMain from './components/AppMain.vue';
  import AppMovieCards from './components/AppMovieCards.vue';
  import { store } from './store';
  export default {
    components:{
      AppHeader,
      AppMain,
      AppMovieCards,
    },
    data(){
      return{
        store
      }
    },mounted() {
    
    },methods: {
       searchMovie(){
         if(store.movieList !== ''){
           let filteredUrl =store.movieUrl + store.name_search + store.movieSearch
           axios.get(filteredUrl).then((response)=> {
             store.movieList = response.data.results
             //console.log(store.movieList[0].genre_ids) //gamechanger FORSE!!

          if (store.movieList.length > 0 && store.genreValue !== '') {
            store.movieList = store.movieList.filter((movie) =>
              movie.genre_ids.includes(store.genreValue)
            );
          }
         })  
         } 
       },
      
    }
  }
</script>
<template >
  <div>
      <AppHeader @search="searchMovie()"/>
      <AppMain/>
  </div>
</template>
<style lang="scss">
@use './styles/generals.scss' as *
  
</style>