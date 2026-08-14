"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const address_1 = require("./address");
const student_1 = require("./student");
const add = new address_1.Address("Andhra pradesh", "ongole");
const st = new student_1.Student("Nandini", 19, add);
st.display();
