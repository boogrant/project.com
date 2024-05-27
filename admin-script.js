document.addEventListener('DOMContentLoaded', () => {
    const addMovieForm = document.getElementById('add-movie-form');

    addMovieForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const movieName = addMovieForm['movie-name'].value;
        const movieActors = addMovieForm['movie-actors'].value;
        const movieDirector = addMovieForm['movie-director'].value;
        const movieReleaseDate = addMovieForm['movie-release-date'].value;
        const movieRunTime = addMovieForm['movie-run-time'].value;
        const moviePoster = addMovieForm['movie-poster'].value;

        // Add movie to timeline and database
        await addMovieToTimeline(movieName, movieActors, movieDirector, movieReleaseDate, movieRunTime, moviePoster);

        // Optionally, you can clear the form after submission
        addMovieForm.reset();
    });
});

async function addMovieToTimeline(name, actors, director, releaseDate, runTime, poster) {
    const timeline = document.querySelector('.timeline');

    // Create a new movie object
    const newMovie = {
        name: name,
        actors: actors,
        director: director,
        releaseDate: releaseDate,
        runTime: runTime,
        poster: poster
    };

    try {
        // Save movie to the backend (if needed)
        const response = await fetch('/movies', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newMovie)
        });
        
        if (!response.ok) {
            throw new Error('Failed to add movie');
        }

        // Get the new movie ID from the response
        const newMovieId = (await response.json())._id;

        // Create a new timeline increment
        const newIncrement = document.createElement('div');
        newIncrement.classList.add('timeline-increment');
        newIncrement.dataset.movie = newMovieId;

        newIncrement.addEventListener('mouseover', () => {
            showMovieInfo(newMovieId);
        });

        newIncrement.addEventListener('mouseout', () => {
            hideMovieInfo();
        });

        newIncrement.addEventListener('click', () => {
            window.location.href = `movie.html?id=${newMovieId}`;
        });

        timeline.appendChild(newIncrement);

        // Update movie data in the frontend (if needed)
        movieData[newMovieId] = newMovie;

        // Inform the user that the movie was added
        console.log('Movie added successfully.');

    } catch (error) {
        console.error('Error adding movie:', error.message);
    }
}

function showMovieInfo(movieId) {
    const movie = movieData[movieId];
    movieInfoContainer.innerHTML = `
        <img src="${movie.poster}" alt="${movie.name}">
        <h2>${movie.name}</h2>
        <p><strong>Actors:</strong> ${movie.actors}</p>
        <p><strong>Director:</strong> ${movie.director}</p>
        <p><strong>Release Date:</strong> ${movie.releaseDate}</p>
        <p><strong>Run Time:</strong> ${movie.runTime}</p>
    `;
    movieInfoContainer.style.display = 'block';
}

function hideMovieInfo() {
    movieInfoContainer.style.display = 'none';
}
