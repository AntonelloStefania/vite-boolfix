import { reactive } from 'vue'
export const store = reactive({
    movieUrl: ' https://api.themoviedb.org/3/search/multi?api_key=afbfdd26d3afcf491817f0652ad9640c',
    genreMovieUrl: 'https://api.themoviedb.org/3/genre/movie/list?api_key=afbfdd26d3afcf491817f0652ad9640c',
    genreSerieUrl: 'https://api.themoviedb.org/3/genre/tv/list?api_key=afbfdd26d3afcf491817f0652ad9640c',
    movieList: [],
    filterList: [],
    movieSearch: '',
    name_search: '&query=',
    bkg_img_path: 'https://image.tmdb.org/t/p/w342/',
    genreValue: '',
})