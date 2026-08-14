"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
class Student {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    display() {
        console.log(this.name);
        console.log(this.age);
        console.log(this.address.city);
        console.log(this.address.state);
    }
}
exports.Student = Student;
