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
   }, methods: {
     
   },
  }
         
      

</script> 
<template >
   <div class="container filter-container">
        <div class="row justify-content-center align-items-center">
            <div class="col-auto" >
              <label for="" class="me-3">Make your choice by genre:</label>
                <select name="" id="" v-model="store.genreValue" @change="$emit('genChange')">
                    <option value="" selected  @click="$emit('reset')" >Reset genre</option>
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
  margin-top: 5rem;
}
.filter-container{
    margin-top: 8rem;

    label{
      color: $red_color;
      font-size: 22px
    };

    select{
      border: 2px solid $red_color;
      border-radius: 0.7rem;
      padding-left: 0.4rem;
      padding-top: 0.3rem;
      padding-bottom: 0.2rem;
      color: rgb(97, 95, 95);
    }
}
    
  
</style>