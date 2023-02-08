const Employee = require("./Employee")

class Engineer {

    constructor() {
        this.name = "";
        this.id = 0;
        this.email = "";
        this.github = "";
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

    getGithub() {
        return this.github;
    }

    getRole(){
        return Engineer;
    }

}

module.exports = Engineer;