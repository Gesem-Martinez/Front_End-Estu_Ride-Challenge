const changeImage = function(direction, slides){
    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + direction;

    if(newIndex < 0){
        newIndex = slides.children.length - 1;
    } else if(newIndex >= slides.children.length){
        newIndex = 0;
    }

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
}

export {changeImage};