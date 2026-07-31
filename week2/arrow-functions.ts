function displayscore(name:string,marks:number):string{
    return `${name}: you got ${marks} in your fsd lab`;
}

const arrowfunction=(name:string, marks:number):string=> `${marks} got scored by ${name} in fsd lab`;

const yourname="Nandini";
const marks=85;

console.log(displayscore(yourname,marks));
console.log(arrowfunction(yourname,marks));
