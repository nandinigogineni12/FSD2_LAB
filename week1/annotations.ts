let movieTitle:string="bahubali";
let releaseYear:number=2015;
let isBlockbuster:boolean=true;

function getMoviestatus(title:string, year:number):string{
    return `${title} was a massive hit released in ${year}`;
}

let leadactors:string[] =["prabhas", "rana", "anushka", "tamanna"];

const summary:string=getMoviestatus(movieTitle,releaseYear);

console.log(summary);
console.log(`Starring: ${leadactors.join(" , ")}`);
console.log(`Is it a blockbuster? ${isBlockbuster? "yes":"no"}`);

