function cinema (input){
let movieType = input[0];
let row = Number(input[1]);
let cols = Number(input[2]);

let totalPlace = row * cols;

let price = 0;

switch (movieType) {
case 'Premiere' : price = totalPlace * 12; break;

case 'Normal' : price = totalPlace * 7.50; break;

case 'Discount' : price = totalPlace * 5; break;
}
console.log(price.toFixed(2));
}
cinema(["Discount", "12", "30"]);