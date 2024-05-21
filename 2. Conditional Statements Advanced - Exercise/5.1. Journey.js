function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let price = 0;
    let place = '';
    let destination = '';

    switch (season) {
        case 'summer': place = 'Camp';
            if (budget <= 100) {
                destination = 'Bulgaria';
                price = 0.3 * budget;
            } else if (budget <= 1000) {
                destination = 'Balkans';
                price = 0.4 * budget;
            } else {
                destination = 'Europe';
                price = 0.9 * budget;
            }
        break;
        case 'winter': place = 'Hotel';
            if (budget <= 100) {
                destination = 'Bulgaria';
                price = 0.7 * budget;
            } else if (budget <= 1000) {
                destination = 'Balkans';
                price = 0.8 * budget;
            } else {
                destination = 'Europe';
                price = 0.9 * budget;
            }
        break;
    }
    if (destination === 'Europe') {
        place = 'Hotel';
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${place} - ${price.toFixed(2)}`);
}
journey(["678.53", "winter"]);