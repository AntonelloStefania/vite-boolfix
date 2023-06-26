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
  <div class="container card-main">
    <div class="row">
        <div class="col">
            <ul class="d-flex flex-wrap justify-content-center ">
                <li class="card col-auto m-2" v-for="(movie, index) in store.movieList" :key="index"><AppMovieCards :MyMovies="movie" /></li>
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
  
</style>