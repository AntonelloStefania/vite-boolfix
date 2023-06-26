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
        <div class="hover-bkg">
            <div>
                <h1>{{ MyMovies.name || MyMovies.title }}</h1>
                <h6>{{ MyMovies.original_name || MyMovies.original_title }}</h6>
                <span>{{ MyMovies.original_language }}
                    <img  :src="'../../node_modules/flagpack-core/svg/s/'+ MyMovies.original_language.toUpperCase() +'.svg'" :alt=" MyMovies.name">
                </span>
            </div>
            <div>
                <p class="">{{ MyMovies.overview }}</p>
            </div>
            <div>
                <span v-for="vote in getVote()" :key="vote"><i class="fa-solid fa-star" style="color: #FDCF00;"></i></span>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss' as *;
@use '../styles/partials/variables' as *;

.movie-card{
    width: 342px;
    height: 500px;
    overflow-y: auto;
    color: white;
    text-align: center;
    font-weight: bold;
    background-color: rgb(38, 38, 38);
    cursor:pointer;
    border: 4px solid black;
  
    h1{ 
    font-size: 32px;
    font-weight: bolder;
    color: $red_color;
    padding: 0.275rem;
    -webkit-text-stroke-width: 0.1px;
    -webkit-text-stroke-color: rgba(0, 0, 0, 0.623);
   }
}

.movie-card p{
    display: none;
    padding: 0.275rem;
    font-size: 20px;
}

.movie-card:hover p{
    display: block;
}

img{
    width: 20px;
    height: 16px;
}

.hover-bkg{
    background-color: rgba(0, 0, 0, 0.678);
}

.movie-card:hover .hover-bkg{
    height: 100vh;
}
</style>