"use strict";

let numberOfFilms; /* Унарный плюс означает, что ответ - число */

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

    function rememberMyFilms() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Назовите один из последний просмотренных фильмов?', ''),
                  b = prompt('На сколько оцените его?', '');
        
            if (a != '' && b != '' && a != null && b != null && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
             } else {
                    console.log('error');
                    i--;
                }
            }
    }

    rememberMyFilms();

    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов!');
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        alert('Вы классический зритель!');
    } else if (personalMovieDB.count > 30) {
        alert('Вы киноман!');
    } else {
        alert('Произошла ошибка');
    }

    function detectPersonalLevel() {
        if (personalMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов!');
        } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
            alert('Вы классический зритель!');
        } else if (personalMovieDB.count > 30) {
            alert('Вы киноман!');
        } else {
            alert('Произошла ошибка');
        }
    }

    detectPersonalLevel();

console.log(personalMovieDB);

const logg = "Hello world";
console.log(logg.slice(0, 5));

const examp = "I'm gonna to walking from this station";
console.log(examp.slice(13, 20));
console.log(examp.slice(10));