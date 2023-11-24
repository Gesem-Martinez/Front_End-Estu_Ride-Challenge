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

export { Reservation };