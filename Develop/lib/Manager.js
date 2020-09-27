// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./Employee.js");

class Manager extends Employee {
    constructor (name, id, email, officeNumber){super(name, id, email)
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = 'Manager';
        this.officeNumber = officeNumber;
    }
}

Manager.prototype.getRole = function() {
    return this.role; 
}

Manager.prototype.getOfficeNumber = function() {
    return this.officeNumber;
}

module.exports = Manager;