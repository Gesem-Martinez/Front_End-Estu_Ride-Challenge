import { displayMessage } from "./display.js";

function validateReservationDates(checkinDate, checkoutDate, reservationsArray, guestNumber) {
    let currentDate = new Date();
    let newReservationCheckin = new Date(checkinDate);
    let newReservationCheckout = new Date(checkoutDate);

    let passed = true;
    let message = "Reservation Succesful!";

    if (checkinDate === "" || checkoutDate === "" || guestNumber === "") {
        message = "Error: Empty values";
        passed = false;
    } else if(Number(guestNumber) < 1 || Number(guestNumber) > 4){
        message = "Number of guests out of range. Minimum of 1 and maximum of 4";
        passed = false;
    } else if (newReservationCheckin > newReservationCheckout) {
        message = "Invalid dates: Check-in set after Check-out";
        passed = false;
    } else if (newReservationCheckin < currentDate) {
        message = "Invalid dates: Reservation set before current date";
        passed = false;
    }

    for (let reservation of reservationsArray) {
        if (newReservationCheckin <= reservation.checkoutDate && newReservationCheckout >= reservation.checkinDate) {
            message = "Invalid dates: Reservation conflicts with existing ones.";
            passed = false;
            break;
        }
    }

    if(!passed){
        displayMessage(message, "error");
        return false;
    }

    displayMessage(message, "success");
    return true;

}

export {validateReservationDates};