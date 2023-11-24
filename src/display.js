function displayMessage(message, type){
    const dialog = document.querySelector("dialog");
    const dialogDiv = document.querySelector("[data-dialog-div]")
    const dialogIcon = document.querySelector("[data-dialog-icon]");
    const dialogMessage = document.querySelector("[data-dialog-message]");

    const dialogClose = document.querySelector("[data-dialog-close]");
    dialogClose.addEventListener('click', () => closeMessage(dialog));

    if(type === "error"){
        dialogDiv.classList.add("error-message");
        dialogIcon.setAttribute("src", "./images/error-icon.svg");
    } else if(type === "success"){
        dialogDiv.classList.add("success-message");
        dialogIcon.setAttribute("src", "./images/success-icon.svg");
    }

    dialogMessage.textContent = message;

    dialog.showModal();
}

function closeMessage(dialog){
    const dialogDiv = dialog.querySelector("[data-dialog-div]");
    dialogDiv.classList.remove("success-message");
    dialogDiv.classList.remove("error-message");
    dialog.close();

}

function displayReservation(reservation){
    
}

export {displayMessage};