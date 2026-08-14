namespace onlineorder{
    export class order{
        constructor(
            public orderid:number,
            public address:string
        )
        {}
        public dispalyorder():void{
            console.log(this.orderid);
            console.log(this.address);
        }
    }

    export function payment(amount:number):void{
        const gst=20;
        console.log(`totalamount:${amount+gst}`);
    }
}
const o=new onlineorder.order(101,"ongole");
o.dispalyorder();
onlineorder.payment(1000);