// 'Star Wars'

// 1977

// [
//   { 
//     title: 'Star Wars', 
//     director: 'George Lucas', 
//     year: 1977 
//   },
               
//   { 
//     title: 'The  Dark Knight', 
//     director: 'Christopher Nolan', 
//     year: 2008 
//   }
// ]

const findTheMovie = (movieTitle, movieYear, arrOfMovies) =>{
    // console.log(movieTitle, movieYear, arrOfMovies);
    for(let i = 0; i < arrOfMovies.length; i++){
        const movie = arrOfMovies[i];
        // console.log(movie.title);
        if(movie.title.toLowerCase() === movieTitle.toLowerCase() && movie.year === movieYear ){
            return movie;
        }
    }
    }

const movieTitle = 'Star Wars';
const movieYear = 1977;

const arrayOfMovies = [
      { 
        title: 'Star Wars', 
        director: 'George Lucas', 
        year: 1977 
      },
                   
      { 
        title: 'The  Dark Knight', 
        director: 'Christopher Nolan', 
        year: 2008 
      }
    ]

 const result =   findTheMovie(movieTitle, movieYear, arrayOfMovies);
 console.log(result);
