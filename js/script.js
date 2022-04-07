"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ''); /* Унарный плюс означает, что ответ - число */

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Назовите один из последний просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Назовите один из последний просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);