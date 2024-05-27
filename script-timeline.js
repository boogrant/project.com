document.addEventListener('DOMContentLoaded', () => {
    const movieData = {
        1: {
            name: "Iron Man",
            actors: "Robert Downey Jr., Gwyneth Paltrow, Terrence Howard",
            director: "Jon Favreau",
            releaseDate: "May 2, 2008",
            runTime: "126 minutes",
            poster: "images/ironman.jpeg"
        },
        2: {
            name: "The Incredible Hulk",
            actors: "Edward Norton, Liv Tyler, Tim Roth",
            director: "Louis Leterrier",
            releaseDate: "June 13, 2008",
            runTime: "112 minutes",
            poster: "images/hulk.jpg"
        },
        3: {
            name: "Iron Man 2",
            actors: "Robert Downey Jr., Gwyneth Paltrow, Don Cheadle",
            director: "Jon Favreau",
            releaseDate: "May 7, 2010",
            runTime: "124 minutes",
            poster: "images/ironman2.jpeg"
        },
        4: {
            name: "Thor",
            actors: "Chris Hemsworth, Natalie Portman, Tom Hiddleston",
            director: "Kenneth Branagh",
            releaseDate: "May 6, 2011",
            runTime: "115 minutes",
            poster: "images/thor.jpg"
        },
        5: {
            name: "Captain America: The First Avenger",
            actors: "Chris Evans, Hayley Atwell, Sebastian Stan",
            director: "Joe Johnston",
            releaseDate: "July 22, 2011",
            runTime: "124 minutes",
            poster: "images/cap1.jpg"
        }

        
    };

    const timeline = document.querySelector('.timeline');
    const movieInfoContainer = document.getElementById('movie-info');

    // Clear existing increments
    timeline.innerHTML = '<div class="timeline-line"></div>';

    // Dynamically add timeline increments
    Object.keys(movieData).forEach(movieId => {
        const increment = document.createElement('div');
        increment.classList.add('timeline-increment');
        increment.dataset.movie = movieId;
        timeline.appendChild(increment);
    });

    const increments = document.querySelectorAll('.timeline-increment');

    increments.forEach(increment => {
        increment.addEventListener('mouseover', () => {
            const movieId = increment.dataset.movie;
            if (movieId && movieData[movieId]) {
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
        });

        increment.addEventListener('mouseout', () => {
            movieInfoContainer.style.display = 'none';
        });

        increment.addEventListener('click', () => {
            const movieId = increment.dataset.movie;
            if (movieId && movieData[movieId]) {
                const movie = movieData[movieId];
                window.location.href = `movie.html?id=${movieId}`;
            }
        });
    });
});
