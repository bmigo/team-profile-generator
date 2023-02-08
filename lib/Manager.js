const Employee = require("./Employee")

class Manager {

    constructor(name, id, email) {
        super(name, id, email)
        this.officeNumber = officeNumber;
    }

    getOfficeNum () {
        return this.officeNumber;
    }

    getRole(){
        return Manager;
    }

}

module.exports = Manager;