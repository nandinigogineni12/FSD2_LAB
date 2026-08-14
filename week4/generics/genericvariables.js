"use strict";
class Box {
    constructor(value) {
        this.value = value;
    }
    display() {
        console.log("Value:", this.value);
    }
}
const box1 = new Box("Laptop");
const box2 = new Box(500);
box1.display();
box2.display();
