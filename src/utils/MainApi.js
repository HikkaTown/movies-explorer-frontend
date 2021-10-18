const BASE_URL = 'https://api.best-movies.nomoredomains.club';

// const BASE_URL = 'http://localhost:3454';

function _responseValid(res) {
    return res.ok ? res.json() : Promise.reject(`${res.status}`);
}

export const register = (email, password, name) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({email: email, password: password, name: name})
    })
    .then((res) => _responseValid(res))
}

export const login = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({email: email, password: password})
    })
    .then((res) => _responseValid(res))
}

export const signout = () => {
    return fetch(`${BASE_URL}/signout`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
        }
    })
    .then((res) => _responseValid(res))
}

export const getUser = () => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            "Content-type": "application/json",
        }
    })
    .then((res) => _responseValid(res))
}

export const editUser = (name, email) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'PATCH',
        credentials: 'include',
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({email: email, name: name})
    })
    .then((res) => _responseValid(res))
}

export const deleteMovie = (filmId) => {
    return fetch(`${BASE_URL}/movies/${filmId}`, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
            "Content-Type": "application/json",
        }
    })
    .then((res) => _responseValid(res))
}

export const getSavedMovies = () => {
    return fetch(`${BASE_URL}/movies`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            "Content-Type": "application/json",
        }
    })
    .then((res) => _responseValid(res))
}

export const savedMovie = (country, director, duration, year, description, image, trailer, nameRU, nameEN, thumbnail, movieId) => {
    return fetch(`${BASE_URL}/movies`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            country: country,
            director: director,
            duration: duration,
            year: year,
            description: description,
            image: image,
            trailer: trailer,
            nameRU: nameRU,
            nameEN: nameEN,
            thumbnail: thumbnail,
            movieId: movieId,
        })
    })
    .then((res) => _responseValid(res))
}