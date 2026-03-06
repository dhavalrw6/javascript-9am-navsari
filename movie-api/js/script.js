const url = 'https://api.themoviedb.org/3/movie/popular';
const base_url = 'https://image.tmdb.org/t/p/w500';
const displayMovie = document.querySelector('#display-movie');

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZDg0NTMzZTk1MjZiOTc5NGIyNWFhZjVhZDM1YzQyZiIsIm5iZiI6MTc0NDE5ODAxMy45NDQsInN1YiI6IjY3ZjY1OTdkZGRmOTE5NDM4N2RhNDNjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hds-jzqcawTauWJwnnzvbUO33LtYiO-ibjNA50uk4dY'
    }
};

fetch(url, options)
    .then(res => res.json())
    .then(json => {
        console.log(json);
        
        displayMovies(json.results);
    })
    .catch(err => console.error(err));


const displayMovies = (list)=>{
    list.forEach((movie)=>{
        const { backdrop_path, title, overview, release_date  } = movie;
        let col = document.createElement('div');
        col.classList.add('col-md-3');
        col.innerHTML = `
            <div class="card">
            <img src="${base_url+backdrop_path}" class="card-img-top" alt="${title}">
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <strong class="card-title">Release Date:</strong> <span>${release_date}</span>
                <p class="card-text">${overview.split(' ').slice(0,20).join(' ')}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
        `
        console.log(overview.split(' ').slice(0,20).join(' '));
        
        displayMovie.append(col);
    })
}