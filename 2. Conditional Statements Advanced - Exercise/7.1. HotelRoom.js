function hotelRoom(input) {
    let month = input[0];
    let nightStayCount = Number(input[1]);

    let pricePerStudio = 0;
    let pricePerApartment = 0;
    let studioDiscount = 0;
    let apartmentDiscount = 0;

    switch (month) {
        case 'May':
        case 'October':
            pricePerStudio = 50;
            pricePerApartment = 65;
            break;

        case 'June':
        case 'September':
            pricePerStudio = 75.20;
            pricePerApartment = 68.70;
            break;

        case 'July':
        case 'August':
            pricePerStudio = 76;
            pricePerApartment = 77;
            break;
    }
    if (nightStayCount > 14 && (month === 'May' || month === 'October')) {
        studioDiscount = 0.3;
    } else if (nightStayCount > 14 && (month === 'June' || month === 'September')) {
        studioDiscount = 0.2;
    } else if (nightStayCount > 7 && (month === 'May' || month === 'October')) {
        studioDiscount = 0.05;
    }
    if (nightStayCount > 14) {
        apartmentDiscount = 0.1;
    }
    let totalStudioPrice = pricePerStudio * nightStayCount * (1 - studioDiscount);
    let totalApartmentPrice = pricePerApartment * nightStayCount * (1 - apartmentDiscount);

    console.log(`Apartment: ${totalApartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${totalStudioPrice.toFixed(2)} lv.`);
}
hotelRoom(["August", "20"]);