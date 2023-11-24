class Reservation{
    constructor(checkinDate, checkoutDate, guestNumber){
        this.checkinDate = new Date(checkinDate);
        this.checkoutDate = new Date(checkoutDate);
        this.guestNumber = guestNumber;
    }

    get checkinDate(){
        return this._checkinDate;
    }

    get checkoutDate(){
        return this._checkoutDate;
    }

    get guestNumber(){
        return this._guestNumber;
    }

    set checkinDate(date){
        this._checkinDate = new Date(date);
    }

    set checkoutDate(date){
        this._checkoutDate = new Date(date);
    }

    set guestNumber(num){
        if(num >= 1 && num <= 4){
            this._guestNumber = num;
        }
    }

}

function validateReservationDates(checkinDate, checkoutDate, reservationsArray){
    let currentDate = new Date();
    let newReservationCheckin = new Date(checkinDate);
    let newReservationCheckout = new Date(checkoutDate);


    if(checkinDate === "" || checkoutDate === ""){
        console.log("Empty values");
        return false;
    }

    //Check if the checkin date is set before the checkout date
    if(newReservationCheckin > newReservationCheckout){
        console.log("Invalid dates: Check-in set after Check-out");
        return false;
    }

    //Check if the reservation is not made in a past date  
    if(newReservationCheckin < currentDate){
        console.log("Invalid dates: Reservation set before current date");
        return false;
    }

    //If the reservations array is empty, there are no conflicts
    if(reservationsArray.length == 0){
        return true;
    }

    for(let reservation in reservationsArray){ 
        if(newReservationCheckin <= reservation.checkoutDate && newReservationCheckout >= reservation.checkinDate){
            console.log("Invalid dates: Reservation conflicts with existing ones.");
            return false;
        }
    }
}

export { Reservation, validateReservationDates };