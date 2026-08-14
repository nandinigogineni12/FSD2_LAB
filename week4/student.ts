import {Address} from './address';

export class Student{
    constructor(
        public name:string,
        public age:number,
        public address:Address
    )
    {}
    public display():void{
        console.log(this.name);
        console.log(this.age);
        console.log(this.address.city);
        console.log(this.address.state);
    }
}