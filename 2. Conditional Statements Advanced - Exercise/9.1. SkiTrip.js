function skiTrip (input) {
let days = Number(input[0]);
let roomType = input[1];
let review = input[2];

let nightStay = days - 1;
let price = 0;
switch (roomType) {
case 'room for one person' : price = 18 * nightStay; break;

    case 'apartment' : price = 25 * nightStay;
        if (days < 10) {
            price *= 0.7;
        } else if (days >= 10 && days < 15) {
            price *= 0.65;
        } else {
            price *= 0.5;
        }
        break;

        case 'president apartment' : price = 35 * nightStay;
        if (days < 10) {
            price *= 0.9;
        } else if (days >= 10 && days < 15) {
            price *= 0.85;
        } else {
            price *= 0.8;
        }
        break;
}
if (review === 'positive') {
price *= 1.25;
} else if (review === 'negative') {
price *= 0.9;
}
console.log(price.toFixed(2));
}
skiTrip(["14", "apartment", "positive"]);