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
    <div class=" movie-card d-flex flex-column justify-content-between position-relative" :style="{'background-image':`url(${store.bkg_img_path}${MyMovies.poster_path})`}">
        <div class="hover-bkg">
            <div class="main-card">
                <h1>{{ MyMovies.name || MyMovies.title }}</h1>
                <h5>{{ MyMovies.original_name || MyMovies.original_title }}</h5>
            </div>
            <div>
                <p class="">{{ MyMovies.overview }}</p>
            </div>
            <div class="mb-3">
                <span class="mt-3" v-for="vote in getVote()" :key="vote"><i class="fa-solid fa-star" style="color: #FDCF00;"></i></span>
            </div>
            <div class=" justify-content-start ps-4 country">
                <span class="me-3">country: </span>
                <span class="flag " :style="{'background-image':`url('../../node_modules/flagpack-core/svg/s/${MyMovies.original_language.toUpperCase()}.svg'`,'opacity':'0.8'}">{{ MyMovies.original_language }}
                    <!-- <img  :src="'../../node_modules/flagpack-core/svg/s/'+ MyMovies.original_language.toUpperCase() +'.svg'" :alt="''"> -->
                </span>
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

   .flag{
    font-size: 15px;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 0.1rem 0.8rem;
    color: rgb(0, 0, 0);
    -webkit-text-stroke-width: 0.2px;
    -webkit-text-stroke-color: rgb(0, 0, 0);
    background-color: white;
    border-radius: 5rem;
    
   
   }

}
.country{
 display: none;
}


.movie-card:hover .country{
    display: flex;
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