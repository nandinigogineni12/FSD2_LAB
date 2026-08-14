"use strict";
class student {
    constructor(name, age, cgpa) {
        this.display = () => {
            console.log(`Name: ${this.studentname}, Age: ${this.age}, CGPA: ${this.cgpa}`);
        };
        this.studentname = name ?? "Nandini";
        this.age = age ?? 19;
        this.cgpa = cgpa ?? 8.5;
    }
}
const student1 = new student();
student1.display();
const student2 = new student("latha");
student2.display();
const student3 = new student("john", 23);
student3.display();
const student4 = new student("jane", 22, 8);
student4.display();
student4.studentname = "sushma";
console.log(`Updated name of student4 is ${student4.studentname}`);
console.log(student4.display());
