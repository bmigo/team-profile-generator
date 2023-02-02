const Employee = require("./Employee")

class Engineer {

    constructor() {
        this.name = "";
        this.id = 0;
        this.email = "";
        this.github = "";
    }

    getName() {

    }

    getID() {

    }

    getEmail() {

    }

    getGithub() {

    }

    getRole(){
        return Engineer;
    }

}

module.exports = Engineer;