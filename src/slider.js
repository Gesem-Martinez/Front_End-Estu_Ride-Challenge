//Add functionality to the image slider section
//direction = -1 rotate to the previous image
//direction = 1 rotate to the next image
const changeImage = function(direction, slides){

    //Get the current active image slide, identified by the data-active attribute
    const activeSlide = slides.querySelector("[data-active]");

    //Get next active image index by adding the direction value to the index of the current active image
    let newIndex = [...slides.children].indexOf(activeSlide) + direction;

    //Change the current active image based on its index
    if(newIndex < 0){
        newIndex = slides.children.length - 1;
    } else if(newIndex >= slides.children.length){
        newIndex = 0;
    }

    //Set new current active image's data-active attribute to true
    slides.children[newIndex].dataset.active = true;
    //Remove old active image's data-active attribute
    delete activeSlide.dataset.active;
}

export {changeImage};