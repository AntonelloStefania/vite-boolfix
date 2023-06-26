<script>
    export default {
        props:{
            MyMovies : Object
        },
        data(){
           return{
           }
        }

    }
    
</script>
<template >
    <div class="cards movie-card" >
        <h1>{{ MyMovies.name }} {{ MyMovies.title }}</h1>
        <h6>{{ MyMovies.original_name }}</h6>
        <span>{{ MyMovies.original_language }}
            <img  :src="'../../node_modules/flagpack-core/svg/s/'+ MyMovies.original_language +'.svg'" alt="">
        </span>
        <p class="">{{ MyMovies.overview }}</p>
        <span>{{ MyMovies.vote_average }}</span>
    </div>
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss' as *;

.movie-card{
   h1{ 
    font-size: 22px;
   }

  
}

img{
    width: 12px;
    height: 12px;
}

    
</style>