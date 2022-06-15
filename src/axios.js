import axios from 'axios';

// we use baseURl and instance variable to make api
// requests to tmdb e.g instance.get('/batman') will
// fetch me the movie Batman
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;
