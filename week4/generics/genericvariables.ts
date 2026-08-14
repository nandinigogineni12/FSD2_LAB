class Box<T> {
    constructor(public value: T) {
        
    }

    display(): void {
        console.log("Value:", this.value);
    }
}

const box1 = new Box<string>("Laptop");
const box2 = new Box<number>(500);

box1.display();
box2.display();