const Employee = require("./Employee")

class Intern {

    constructor() {
        this.name = "";
        this.id = 0;
        this.email = "";
        this.school = "";
    }

    getName() {

    }

    getID() {

    }

    getEmail() {

    }

    getSchool() {

    }

    getRole(){
        return Intern;
    }

}

module.exports = Intern;