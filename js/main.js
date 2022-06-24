//task №1
const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', 10);


//task №2
const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
};
console.log(personalMovieDB);


//task №3
const lastFilm = prompt('Один из последних просмотренных фильмов?', 'Суховей'),
      yourRating = prompt('На сколько оцените его?', '8'),
         
      lastFilmtwo = prompt('Один из последних просмотренных фильмов?', 'Драйв'),
      yourRatingtwo = prompt('На сколько оцените его?', '6');

   
personalMovieDB.movies[lastFilm] = yourRating;

personalMovieDB.movies[lastFilmtwo] = yourRatingtwo;

console.log(personalMovieDB);