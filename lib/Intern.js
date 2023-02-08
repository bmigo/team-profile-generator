const Employee = require("./Employee")

class Intern {

    constructor() {
        this.name = "";
        this.id = 0;
        this.email = "";
        this.school = "";
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

    getSchool() {
        return this.school;
    }

    getRole(){
        return Intern;
    }

}

module.exports = Intern;