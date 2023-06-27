<script>
   import {store} from '../store';
   import AppMovieCards from './AppMovieCards.vue';
   import axios from 'axios';
  export default {
    components:{
        AppMovieCards,
    },
    data() {
        return {
          store  
           
        }
    },mounted() {
      axios.get(store.genreMovieUrl).then((response)=>{
          store.filterList = response.data.genres
        }
      )
   }
  }
         
      

</script> 
<template >
   <div class="container filter-container">
        <div class="row">
            <div class="col-auto">
                <select name="" id="" v-model="store.genreValue" @change="$emit('genChange')">
                    <option v-for="(genre, index) in store.filterList" :key="index" :value="genre.id">{{genre.name}}</option>
                </select>
            </div>
        </div>
    </div>
  <div class="container card-main">
    <div class="row">
        <div class="col">
            <ul class="d-flex flex-wrap justify-content-center ">
                <li class="col-auto m-2" v-for="(movie, index) in store.movieList" :key="index"><AppMovieCards :MyMovies="movie" /></li>
            </ul>
        </div>

    </div>
  </div>
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss' as*;
@use '../styles/partials/variables' as *;

.card-main{
  margin-top: 10rem;
}
.filter-container{
    margin-top: 8rem;
}
    
  
</style>