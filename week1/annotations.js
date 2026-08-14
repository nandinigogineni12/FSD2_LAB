"use strict";
let movieTitle = "bahubali";
let releaseYear = 2015;
let isBlockbuster = true;
function getMoviestatus(title, year) {
    return `${title} was a massive hit released in ${year}`;
}
let leadactors = ["prabhas", "rana", "anushka", "tamanna"];
const summary = getMoviestatus(movieTitle, releaseYear);
console.log(summary);
console.log(`Starring: ${leadactors.join(" , ")}`);
console.log(`Is it a blockbuster? ${isBlockbuster ? "yes" : "no"}`);
