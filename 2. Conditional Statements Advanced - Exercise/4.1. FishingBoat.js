function fishingBoat (input) {
let budget = Number(input[0]);
let season = input[1];
let fisherCount = Number(input[2]);
let price = 0;

switch (season) {
case 'Spring' : price = 3000; break;
case 'Summer' :
case 'Autumn' : price = 4200; break;
case 'Winter' : price = 2600; break;
}
if (fisherCount <= 6) {
price *= 0.9;
} else if (fisherCount <= 11) {
price *= 0.85;
} else {
price *= 0.75;
}
if (fisherCount % 2 === 0 && season !== 'Autumn') {
    price *= 0.95;
}
if (budget >= price) {
let moneyLeft = budget - price;
console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
} else {
    let moneyNeeded = price - budget;
    console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
}
}
fishingBoat(["2000", "Winter", "13"]);