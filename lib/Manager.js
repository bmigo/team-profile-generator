const Employee = require("./Employee")

class Manager {

    constructor() {
        this.name = "";
        this.id = 0;
        this.email = "";
        this.officeNumber = 0;
    }

    getName() {
        return this.name;
    }

    getID() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getOfficeNum () {
        return this.officeNumber;
    }

    getRole(){
        return Manager;
    }

}

module.exports = Manager;