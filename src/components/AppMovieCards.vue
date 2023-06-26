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
    <div class="cards movie-card d-flex flex-column justify-content-between" >
        <div>
            <h1>{{ MyMovies.name }} {{ MyMovies.title }}</h1>
            <h6>{{ MyMovies.original_name }} {{ MyMovies.original_title }}</h6>
            <span>{{ MyMovies.original_language }}
                <img  :src="'../../node_modules/flagpack-core/svg/s/'+ MyMovies.original_language.toUpperCase() +'.svg'" alt="">
            </span>
        </div>
        <div>
            <p class="">{{ MyMovies.overview }}</p>
        </div>
        <div>
            <span>{{ MyMovies.vote_average }}</span>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss' as *;

.movie-card{
    width: 200px;
    height: 300px;
   h1{ 
    font-size: 22px;
   }

  
}

.movie-card p{
    display: none;
}

.movie-card:hover p{
    display: block;
}

img{
    width: 12px;
    height: 12px;
}

    
</style>