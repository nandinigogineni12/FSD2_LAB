"use strict";
let userName = "Alice";
let userAge = 25;
let isMember = true;
console.log("Data type of userName is  " + typeof userName);
console.log("Data tyoe of userAge is  " + typeof userAge);
console.log("Data type of isMember is  " + typeof isMember);
function displayUser(name, age, active) {
    console.log(`User: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Status: ${active ? "Active" : "Inactive"}`);
}
displayUser(userName, userAge, isMember);
