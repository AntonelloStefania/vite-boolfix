import { reactive } from 'vue'
export const store = reactive({
    movieUrl: 'https://api.themoviedb.org/3/search/multi?api_key=afbfdd26d3afcf491817f0652ad9640c',
    genreMovieUrl: 'https://api.themoviedb.org/3/genre/movie/list?api_key=afbfdd26d3afcf491817f0652ad9640c',
    randomMovieUrl: ' https://api.themoviedb.org/3/trending/all/week?api_key=afbfdd26d3afcf491817f0652ad9640c',

    actorApiFirst: 'https://api.themoviedb.org/3/movie/',
    movieId: '',
    actorApiEnd: '/credits?api_key=afbfdd26d3afcf491817f0652ad9640c',
    completeActorsApi: '',
    actorsArray: [],
    actualMovieId: '',
    displayCast: false,

    movieList: [],
    filterList: [],
    movieSearch: '',
    name_search: '&query=',
    bkg_img_path: 'https://image.tmdb.org/t/p/w342/',
    profile_img_path: 'https://image.tmdb.org/t/p/w45/',
    genreValue: '',
})