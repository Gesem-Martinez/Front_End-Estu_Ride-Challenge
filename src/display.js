// Functions to display and confirmation/error messages and 
function displayMessage(message, type) {

    //Get dialog elements to fill
    const dialog = document.querySelector("dialog");
    const dialogDiv = document.querySelector("[data-dialog-div]")
    const dialogIcon = document.querySelector("[data-dialog-icon]");
    const dialogMessage = document.querySelector("[data-dialog-message]");

    //Add event listener to dialog button to close the dialog element
    const dialogClose = document.querySelector("[data-dialog-close]");
    dialogClose.addEventListener('click', () => closeMessage(dialog));

    //Display output message based on if its an error or not, add appropiate icon and styles
    if (type === "error") {
        dialogDiv.classList.add("error-message");
        dialogIcon.setAttribute("src", "./images/error-icon.svg");
    } else if (type === "success") {
        dialogDiv.classList.add("success-message");
        dialogIcon.setAttribute("src", "./images/success-icon.svg");
    }

    //Display output message and show dialog as modal
    dialogMessage.textContent = message;

    dialog.showModal();
}

//Remove the styles when closing the modal to reset it for future reservation outputs
function closeMessage(dialog) {
    const dialogDiv = dialog.querySelector("[data-dialog-div]");
    dialogDiv.classList.remove("success-message");
    dialogDiv.classList.remove("error-message");
    dialog.close();

}

//Populates the reservations table with the current reservations
function displayReservation(reservations) {
    const reservationsTable = document.querySelector("[data-reservations-table]");
    let newEntry = document.createElement("tr");

    //Creates table row based on reservation data
    for (let reservation of reservations) {
        newEntry.innerHTML = `<td data-cell="number">${reservation.guestNumber}</td>
    <td data-cell="checkin-date">${reservation.checkinDate.getUTCMonth() + 1}/${reservation.checkinDate.getUTCDate()}/${reservation.checkinDate.getUTCFullYear()} </td>
    <td data-cell="checkout-date">${reservation.checkoutDate.getUTCMonth() + 1}/${reservation.checkoutDate.getUTCDate()}/${reservation.checkoutDate.getUTCFullYear()}</td>`;
        reservationsTable.appendChild(newEntry);
    }
}

export { displayMessage, displayReservation };