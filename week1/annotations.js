var movieTitle = "bahubali";
var releaseYear = 2015;
var isBlockbuster = true;
function getMoviestatus(title, year) {
    return title + " was a massive hit released in " + year;
}
var leadactors = ["prabhas", "rana", "anushka", "tamanna"];
var summary = getMoviestatus(movieTitle, releaseYear);
console.log(summary);
console.log("Starring: " + leadactors.join(" , "));
console.log("Is it a blockbuster? " + (isBlockbuster ? "yes" : "no"));
