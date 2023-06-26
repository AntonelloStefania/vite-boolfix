<script>
import { store } from '../store';
  export default {
    data(){
        return{
            store
        }
    }, computed:{
 
    }
  }
</script>
<template >
  <div class="container-header">
    <div class="row">
        <div class="col-12 d-flex justify-content-around align-items-center">
          <div>
            <h1>boolfix </h1>
          </div>
          <div class="">
              <input type="text" placeholder="search" v-model="store.movieSearch" @keyup.enter="$emit('search')" >
              <button class="" @click="$emit('search')">SEARCH</button>
          </div>
        </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss' as *;
@use '../styles/partials/variables' as *;

.container-header{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
  h1{
    color: $red_color;
    font-size: 70px;
    -webkit-text-stroke-width: 0.5px;
    -webkit-text-stroke-color: rgb(255, 253, 253);
  }

  input{
    padding: 0.5rem;
    border: 3px solid  $red_color;
    border-radius: 0.7rem;
    margin-right:1rem;
  }

  button{
    padding:0.5rem;
    border:1px solid  $red_color;
    background-color:transparent;
    color:  $red_color;
    font-weight: bold;
    border-radius:0.7rem;
    letter-spacing: 0.1rem;
  }
  
  .row{
    background-color: black;
  }
}

</style>