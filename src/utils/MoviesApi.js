export const getMovies = () => {
    return fetch('https://api.nomoreparties.co/beatfilm-movies', {
        method: 'GET',
    })
    .then((res) => {return res.ok ? res.json() : Promise.reject(`${res.status}`);})
} 