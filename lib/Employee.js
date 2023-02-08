const inquirer = require("inquirer");

class Employee {

    constructor(name, id, email) {
        this.name = "";
        this.id = 0;
        this.email = "";
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

    getRole(){
        return Employee;
    }


}

module.exports = Employee;