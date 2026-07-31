var flexibleValue = 10;
flexibleValue = "I changed to a string";
flexibleValue = true;
var mysteryValue = "hello vishnu";
if (typeof mysteryValue === "string") {
    console.log("length of unknown string:" + mysteryValue.length);
}
function lognotification(message) {
    console.log("Alert:" + message);
}
lognotification("environment Setup Complete");
