let flexibleValue:any=10;
flexibleValue="I changed to a string";
flexibleValue=true;

let mysteryValue:unknown="hello vishnu";
if(typeof mysteryValue==="string"){
    console.log("length of unknown string:" +mysteryValue.length);
}

function lognotification(message:string):void{
    console.log("Alert:"+message);
}
lognotification("environment Setup Complete");