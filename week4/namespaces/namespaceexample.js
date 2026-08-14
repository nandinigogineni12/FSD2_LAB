"use strict";
var onlineorder;
(function (onlineorder) {
    class order {
        constructor(orderid, address) {
            this.orderid = orderid;
            this.address = address;
        }
        dispalyorder() {
            console.log(this.orderid);
            console.log(this.address);
        }
    }
    onlineorder.order = order;
    function payment(amount) {
        const gst = 20;
        console.log(`totalamount:${amount + gst}`);
    }
    onlineorder.payment = payment;
})(onlineorder || (onlineorder = {}));
const o = new onlineorder.order(101, "ongole");
o.dispalyorder();
onlineorder.payment(1000);
