            /*** FIRST TASK STATUS: (DONE) ***/
            // let numberOfFilms = +prompt("How many films did you watch?", '');

            // const personalMovieDB = {
            //     count: numberOfFilms,
            //     movies: {},
            //     actors: {},
            //     genres: [],
            //     privat: false,
            // };

            // for (let i = 0; i < 1; i++) {
            //     const a = prompt("awdawdasd???", ''),
            //           b = prompt("1654165", "");

            //     if ( a != null && b != null && a != '' && b != '' && a.length < 50) {
            //         personalMovieDB.movies[a] = b;
            //         console.log("Done");
            //     } else {
            //         console.log("ERROR");
            //         i--;
            //     }     
            // }

            // if(personalMovieDB.count < 10) {
            //     console.log("You watched less films");
            // } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30 ) {
            //     console.log("You are classical zritel");
            // } else if (personalMovieDB.count > 30) {
            //     console.log("You are kinoman");
            // } else {
            //     console.log("ERROR");
            // }

            // console.log(personalMovieDB);            

            /*** SECOND TASK STATUS: (DONE) ***/
            // let numberOfFilms;

            // function start() {
            //     numberOfFilms = +prompt('How many films did you watch?', '');
            //     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            //         numberOfFilms = +prompt('How many films did you watch?', '');
            //     }
            // }
            // // start();
            // const perMovieDB = {
            //     count: numberOfFilms,
            //     movies: {},
            //     actors: {},
            //     genres: [],
            //     private: false,
            // }

            // function remMyFilms() {
            //     for (let i = 0; i < 1; i++) {
            //         const a = prompt('the name of the movie!', ''),
            //             b = prompt('The rating of this movie!', '');

            //         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            //             perMovieDB.movies[a] = b;
            //             console.log('done');
            //         } else {
            //             console.log("ERROR");
            //             i--;
            //         }
            //     }
            // }

            // // remMyFilms();


            // function detPersonalLev() {
            //     if (perMovieDB.count < 10) {
            //         console.log("You watched less films");
            //     } else if (perMovieDB.count >= 10 && perMovieDB.count <= 30) {
            //         console.log("You are classical zritel");
            //     } else if (perMovieDB.count > 30) {
            //         console.log("You are kinoman");
            //     } else {
            //         console.log("ERROR");
            //     }
            // }
            // // detPersonalLev();

            // function showMyDB(hidden) {
            //     if (!hidden) {
            //         console.log(perMovieDB);
            //     }
            // }

            // function wrtYourGenres() {

            //     for (let i = 1; i <= 3; i++) {
            //         perMovieDB.genres[i - 1] = +prompt(`Your Lovely Genre under number ${i}`);
            //     }
            // }
            // // showMyDB(perMovieDB.private);
            // wrtYourGenres();
            // console.log(perMovieDB.genres);

            /*** THIRD TAKS STATUS: (UNDONE) ***/
            const perMovieDB = {
                count: 0,
                movies: {},
                actors: {},
                genres: [],
                private: true,
                start: function () {
                    perMovieDB.count = +prompt('How many films did you watch?', '');
                    while (perMovieDB.count == '' || perMovieDB.count == null || isNaN(perMovieDB.count)) {
                        perMovieDB.count = +prompt('How many films did you watch?', '');
                    }
                },
                remMyFilms: function () {
                    for (let i = 0; i < 1; i++) {
                        const a = prompt('the name of the movie!', ''),
                            b = prompt('The rating of this movie!', '');

                        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                            perMovieDB.movies[a] = b;
                            console.log('done');
                        } else {
                            console.log("ERROR");
                            i--;
                        }
                    }
                },
                detPersonalLev: function () {
                    if (perMovieDB.count < 10) {
                        console.log("You watched less films");
                    } else if (perMovieDB.count >= 10 && perMovieDB.count <= 30) {
                        console.log("You are classical zritel");
                    } else if (perMovieDB.count > 30) {
                        console.log("You are kinoman");
                    } else {
                        console.log("ERROR");
                    }
                },
                showMyDB(hidden) {
                    if (!hidden) {
                        console.log(perMovieDB);
                    }
                },
                toggleVisibleMyDB: function () {
                    if (perMovieDB.private) {
                        perMovieDB.private = false;
                    } else {
                        perMovieDB.private = true;
                    }
                },
                wrtYourGenres: function () {
                    for (let i = 1; i < 2; i++) {
                        //     const genre = prompt(`Your Lovely Genre under number ${i}`);
                        //     if( genre != '' && genre != null && typeof genre != 'number' ) {
                        //         perMovieDB.genres[i - 1] = genre;
                        //    } else {
                        //         alert("WRONG DATA!");
                        //         i--;
                        //    } 

                        let genres = prompt("Write your favorite films through comma!", "");

                        if (genres == '' || genres == null) {
                            alert("WRONG DATA!");
                            i--;
                        } else {
                            perMovieDB.genres = genres.split(',');
                            perMovieDB.genres.sort();
                        }


                        perMovieDB.genres.forEach((item, i) => {
                            console.log(`Your favorite film under number ${i + 1} - this is ${item}`);
                        });
                    }
                }
            };