import fetch from "node-fetch";

const api = 'https://lernia-kino-cms.herokuapp.com/api/movies/';

export async function loadMovies() {
    const res = await fetch(api);
    const load = await res.json();
    return load.data;
}

export async function loadMovie(id) {
    const res = await fetch(api + id);
    const load = await res.json();
    return load.data;
}
