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
      //faccio comparire a schermo film randomici (trending API call)
      axios.get(store.randomMovieUrl).then((response)=>{
        store.movieList = response.data.results
        console.log(response.data.results)
      })
      // this.searchMovieByGenre()
    
    },methods: {
       searchMovie(){
         if(store.movieList !== ''){
           let filteredUrl =store.movieUrl + store.name_search + store.movieSearch
           axios.get(filteredUrl).then((response)=> {
             store.movieList = response.data.results
             //console.log(store.movieList[0].genre_ids) //gamechanger FORSE!!
          })  
       } 
     },
     searchMovieByGenre(){
      if(store.movieList.length > 0){
        store.movieList = store.movieList.filter((elem) =>
          elem.genre_ids.includes(store.genreValue))
      }
     },
     resetMovieList(){
      axios.get(store.randomMovieUrl).then((response)=>{
        store.movieList = response.data.results
      })
     }
    }
  }
</script>
<template >
  <div>
      <AppHeader @search="searchMovie()"/>
      <AppMain @genChange="searchMovieByGenre()" @reset="resetMovieList()"/>
  </div>
</template>
<style lang="scss">
@use './styles/generals.scss' as *
  
</style>