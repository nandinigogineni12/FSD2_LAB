function greet(name:string):string{
    return `hello! Welcome ${name}`;
} 

function getmarks(name:string,marks:number=29):string{
    return `${name}: you got ${marks} score in your fsd internal lab`;
}

function send(redgno:string, message?:string):void{
    console.log(`Sending information to ${redgno}`);
    if(message){
        console.log(`Content: ${message}`);
    }
}

function calculatetotalscore(...marks:number[]):number{
    return marks.reduce((total,current)=>total+current,0);
}

console.log(greet("nandini"));
console.log(getmarks("nandini",30));
console.log(getmarks("nandini"));
send("24b01a4282");
send("24b01a4282","please send your record for reference");
const total=calculatetotalscore(5,25,69);
console.log(`Total lab score is ${total}`);
