"use strict";
function greet(name) {
    return `hello! Welcome ${name}`;
}
function getmarks(name, marks = 29) {
    return `${name}: you got ${marks} score in your fsd internal lab`;
}
function send(redgno, message) {
    console.log(`Sending information to ${redgno}`);
    if (message) {
        console.log(`Content: ${message}`);
    }
}
function calculatetotalscore(...marks) {
    return marks.reduce((total, current) => total + current, 0);
}
console.log(greet("nandini"));
console.log(getmarks("nandini", 30));
console.log(getmarks("nandini"));
send("24b01a4282");
send("24b01a4282", "please send your record for reference");
const total = calculatetotalscore(5, 25, 69);
console.log(`Total lab score is ${total}`);
