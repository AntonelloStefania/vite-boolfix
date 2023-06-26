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
  <div class="container">
    <div class="row">
        <div class="col">
            <ul class="d-flex flex-wrap ">
                <li class="card col-12 col-md-4 col-lg-3" v-for="(movie, index) in store.movieList" :key="index"><AppMovieCards :MyMovies="movie" /></li>
            </ul>
        </div>

    </div>
  </div>
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss' as*;
@use '../styles/partials/variables' as *
  
</style>