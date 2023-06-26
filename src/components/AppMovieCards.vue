<script>
    import {store} from '../store'
    export default {
        props:{
            MyMovies : Object
        },
        data(){
           return{
            store
           }
        },methods:{
            getVote(){
            let vote = Math.ceil(this.MyMovies.vote_average / 2)
            console.log(vote)
            return vote
         }
        },mounted(){
            this.getVote()
        }
    }
    
</script>
<template >
    <div class=" movie-card d-flex flex-column justify-content-between" :style="{'background-image':`url(${store.bkg_img_path}${MyMovies.poster_path})`}">
        <div>
            <h1>{{ MyMovies.name || MyMovies.title }}</h1>
            <h6>{{ MyMovies.original_name || MyMovies.original_title }}</h6>
            <span>{{ MyMovies.original_language }}
                <img  :src="'../../node_modules/flagpack-core/svg/s/'+ MyMovies.original_language.toUpperCase() +'.svg'" alt="">
            </span>
        </div>
        <div>
            <p class="">{{ MyMovies.overview }}</p>
        </div>
        <div>
            <span v-for="vote in getVote()" :key="vote"><i class="fa-solid fa-star" style="color: #f1e71d;"></i></span>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss' as *;

.movie-card{
    width: 185px;
    height: 300px;
    overflow-y: auto;
    color: white;
    text-align: center;
    padding: 0.275rem;
    font-weight: bold;
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