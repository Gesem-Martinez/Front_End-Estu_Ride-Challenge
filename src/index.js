import { changeImage } from "./slider.js";
import { Reservation, validateReservationDates } from "./reservation.js";

//Get button elements from image slider
const buttons = document.querySelectorAll("[data-slider-button]");

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        let direction;
        if(button.dataset.sliderButton === "next"){
            direction = 1;
        } else if(button.dataset.sliderButton === "prev") {
            direction = -1;
        }
    
        let slides = document.querySelector("[data-img-slides]");
        
        changeImage(direction, slides);
    })
});


let reservations = [];
const submitButton = document.querySelector("[data-submit]");

submitButton.addEventListener('click', (event) => {
    let checkinDate = document.querySelector("#checkin").value;
    let checkoutDate = document.querySelector("#checkout").value;
    let guestNumber = document.querySelector("#guestNumber").value;

    if(validateReservationDates(checkinDate, checkoutDate, reservations)){
        let reservation = new Reservation(checkinDate, checkoutDate, guestNumber);
        reservations.push(reservation);
        console.log(reservations);
    }

    event.preventDefault();
});