#!/usr/bin/node
const Rectangle = require('./0-rectangle');

const r1 = new Rectangle(2, 3);
console.log(r1);
r1.print();

r1.rotate();
console.log(r1);
r1.print();

r1.double();
console.log(r1);
r1.print();

const r2 = new Rectangle(0, 3);
console.log(r2);
r2.print();

const r3 = new Rectangle(2, -3);
console.log(r3);
r3.print();

const r4 = new Rectangle('2', 3);
console.log(r4);
r4.print();

const r5 = new Rectangle(2, 3.5);
console.log(r5);
r5.print();
