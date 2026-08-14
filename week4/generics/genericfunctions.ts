function getValue<T>(value: T): T {
    return value;
}

let a = getValue<number>(100);
let b = getValue<string>("TypeScript");

console.log(a);
console.log(b);