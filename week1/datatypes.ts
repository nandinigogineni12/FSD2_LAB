let userName:string="Alice";
let userAge:number=25;
let isMember:boolean=true;

console.log("Data type of userName is  "+typeof userName);
console.log("Data tyoe of userAge is  "+typeof userAge);
console.log("Data type of isMember is  "+typeof isMember);

function displayUser(name:string, age:number, active:boolean):void {
    console.log(`User: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Status: ${active ?"Active" : "Inactive"}`);
}

displayUser(userName,userAge,isMember);