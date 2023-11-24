function validateReservationDates(checkinDate, checkoutDate, reservationsArray) {
    let currentDate = new Date();
    let newReservationCheckin = new Date(checkinDate);
    let newReservationCheckout = new Date(checkoutDate);

    if (checkinDate === "" || checkoutDate === "") {
        console.log("Empty values");
        return false;
    }

    //Check if the checkin date is set before the checkout date
    if (newReservationCheckin > newReservationCheckout) {
        console.log("Invalid dates: Check-in set after Check-out");
        return false;
    }

    //Check if the reservation is not made in a past date  
    if (newReservationCheckin < currentDate) {
        console.log("Invalid dates: Reservation set before current date");
        return false;
    }

    //If the reservations array is empty, there are no conflicts
    if (reservationsArray.length == 0) {
        return true;
    }

    for (let reservation of reservationsArray) {
        if (newReservationCheckin <= reservation.checkoutDate && newReservationCheckout >= reservation.checkinDate) {
            console.log("Invalid dates: Reservation conflicts with existing ones.");
            return false;
        }
    }
}

export {validateReservationDates};