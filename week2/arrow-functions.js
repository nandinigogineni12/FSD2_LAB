"use strict";
function displayscore(name, marks) {
    return `${name}: you got ${marks} in your fsd lab`;
}
const arrowfunction = (name, marks) => `${marks} got scored by ${name} in fsd lab`;
const yourname = "Nandini";
const marks = 85;
console.log(displayscore(yourname, marks));
console.log(arrowfunction(yourname, marks));
