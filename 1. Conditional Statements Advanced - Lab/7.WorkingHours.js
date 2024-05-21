function workingHours (input){
let hour = Number(input[0]);
let day = input[1];

if (day === "Sunday"){
console.log("closed");
} else if (hour < 10 || hour > 18){
console.log("closed");
} else {
    console.log("open");
}
} 
workingHours(["11", "Monday"]);