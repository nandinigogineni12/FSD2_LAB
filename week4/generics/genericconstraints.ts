function getMaximum<T extends number | string>(a: T, b: T): T {
    return a > b ? a : b;
}

console.log(getMaximum(20, 22));       
console.log(getMaximum("helo", "welcome"));