import {moviesData} from '../app.js'

export async function getMovies() {
    try {
        const api = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=2ce9aae9438d23e459d491ef1cfaec12&language=es-ES&page=1');

        const response = await api.json();

        const movies = response.results;

        funcMovies(movies)

    } catch (error) {
        console.log(error);
    }
};

const funcMovies = (movies) => {
    movies.map(movie => {
        moviesData([movie.id, movie.original_title, movie.poster_path, movie.overview, movie.backdrop_path]);  
    });
};





export default getMovies;