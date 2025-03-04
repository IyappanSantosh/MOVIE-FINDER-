//http://img.omdbapi.com/?apikey=14e82aca&s=mummy
http: document.addEventListener("DOMContentLoaded", () => {
    const movieForm = document.getElementById("movieForm");
    const movieResults = document.getElementById("movieResults");
    movieForm.addEventListener("submit", (e) => {
            const movieName = document.getElementById("movieInput").value;
            e.preventDefault(); 
            searchMovies(movieName);      //ethula vanthu erukum bcoz it is a function     
    });
    async function searchMovies(movieName){
        
        
        try{
            movieResults.innerHTML = '<div class="loading">Searching movies...</div>';
            const response =await fetch(`https://www.omdbapi.com?apikey=14e82aca&s=${movieName}`);
            const data = await response.json();
            if((data.response === 'False')) {
                throw new Error("query not found");
            }
            displayMovies(data.Search);
        } catch (error){
            movieResults.innerHTML =`
            <div class="error-message">"An error occurred. Please try again later."
            </div>
            `;
         }
    }
    function displayMovies(movies){
        movieResults.innerHTML = `
        <div class="movies-grid">
        ${movies.map((movie) => `
            <div class="movie-card">
            <img 
            src="${movie.Poster}" 
            alt="${movie.Title}"
            class="movie-poster"
            />
            <div class="movie-info">
            <h3 class='movie-title'>${movie.Title}</h3>
            <div class='movie-year'>${movie.Year}</div>
            </div>
            </div>
           `
        ).join("")}
        </div>
        `;
    }
});





    
