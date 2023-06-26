<script>

    export default {
        props:{
            MyMovies : Object
        }

    }
</script>
<template >
    <div class="cards movie-card" >
        <h1>{{ MyMovies.title }}</h1>
        <h6>{{ MyMovies.original_title }}</h6>
        <span>{{ MyMovies.original_language }}</span>
        <p>{{ MyMovies.overview }}</p>
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

    
</style>