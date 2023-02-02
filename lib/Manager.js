const Employee = require("./Employee")

class Manager {

    constructor() {
        this.name = "";
        this.id = 0;
        this.email = "";
        this.officeNumber = 0;
    }

    getName() {

    }

    getID() {

    }

    getEmail() {

    }

    getRole(){
        return Manager;
    }

}

module.exports = Manager;