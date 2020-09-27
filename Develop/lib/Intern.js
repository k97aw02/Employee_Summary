// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee.js");

class Intern extends Employee {
    constructor (name, id, email, school){
            super(name, id, email)
            this.name = name;
            this.id = id;
            this.email = email;
            this.role = 'Intern';
            this.school = school;
        }
    }
        
        Intern.prototype.getSchool = function(){
            return this.school;
        }
        
        module.exports = Intern;