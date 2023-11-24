import { changeImage } from "./slider.js";

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