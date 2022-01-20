import fetch from "node-fetch";

const api = 'https://lernia-kino-cms.herokuapp.com/api/movies';

export async function loadMovies() {
    const res = await fetch(api + '/movies');
    const load = await res.json();
    return load.data;
}

export async function loadMovie(id) {
    const res = await fetch(api + '/movies/' + id);
    const load = await res.json();
    return load.data;
}
