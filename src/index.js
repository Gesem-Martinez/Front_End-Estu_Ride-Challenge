import { changeImage } from "./slider.js";
import { Reservation } from "./reservation.js";
import { validateReservationDates } from "./validations.js";
import {displayReservation} from "./display.js";
import { getWeatherData } from "./weather.js";

//===== Image Slider =====
//Get button elements from image slider
const buttons = document.querySelectorAll("[data-slider-button]");
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        //Get direction based on the clicked button's data attribute value
        let direction;
        if(button.dataset.sliderButton === "next"){
            direction = 1;
        } else if(button.dataset.sliderButton === "prev") {
            direction = -1;
        }
    
        //Get the images to change
        let slides = document.querySelector("[data-img-slides]");
        changeImage(direction, slides);
    })
});

//===== Reservations =====
//Array to store all submited reservations
let reservations = [];
const submitButton = document.querySelector("[data-submit]");

//Get the values from the reservation form inputs
submitButton.addEventListener('click', (event) => {
    let checkinDate = document.querySelector("#checkin").value;
    let checkoutDate = document.querySelector("#checkout").value;
    let guestNumber = document.querySelector("#guestNumber").value;

    //Check if the values are valid
    if(validateReservationDates(checkinDate, checkoutDate, reservations, guestNumber)){
        //If the values are valid, create new Reservation object, push it to the array and display the array.
        let reservation = new Reservation(checkinDate, checkoutDate, guestNumber);
        reservations.push(reservation);

        displayReservation(reservations);
    }

    event.preventDefault();
});

//===== Weather =====
getWeatherData();