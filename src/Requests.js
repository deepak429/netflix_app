// Typically we would store in {press.env.API_KEY}
const API_KEY = "5f57e05faa2763332cf76effc086fa63";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&networks=Netflix`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genre=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genre=35`,
    fetchHorrorMovies: `/movie/now_playing?api_key=${API_KEY}&with_genre=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genre=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genre=91`,
}

export default requests;