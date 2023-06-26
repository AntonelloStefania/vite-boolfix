import { reactive } from 'vue'
export const store = reactive({
    movieUrl: ' https://api.themoviedb.org/3/search/movie?api_key=afbfdd26d3afcf491817f0652ad9640c',
    movieList: [],
    movieSearch: '',
    name_search: '&query=',
})