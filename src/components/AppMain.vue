<script>
   import {store} from '../store';
   import AppMovieCards from './AppMovieCards.vue';
   import AppInfoCard from './AppInfoCard.vue'
   import axios from 'axios';
  export default {
    components:{
        AppMovieCards,
        AppInfoCard,
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
    closeInfo(){
      store.displayCast = false
    }
     
   },
  }
</script> 
<template >
  <div class="reladive">

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
   <div class="container-fluid info-container" :class="store.displayCast === false ? 'd-none':'d-flex'">
     <div class="row">
       <div class="info-point">
        <h3 class="text-center m-2">Principal actors:</h3>
        <hr>
         <ul class="overflow">
             <li v-for="member in store.actorsArray.slice(0,5)" :key="member">
                 <AppInfoCard :myCast = "member"/>
             </li>
         </ul>
         <div class="d-flex justify-content-center pt-1">
           <button class="btn btn-danger" @click="closeInfo()">close</button>
         </div>
       </div>
 
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

.reladive{
  position: relative
}

.info-container{
  width: 100vw;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 5%;
  transform: translate(-50% -50%);

  

  .info-point{
    width: 500px;
    height: 550px;
    background-color: #2B2A2A;
    color: white;
  }
}


</style>