#!/usr/bin/node
const Rectangle = require('./0-rectangle');

const r1 = new Rectangle(2, 3);
console.log(r1); // Rectangle { width: 2, height: 3 }

const r2 = new Rectangle(0, 3);
console.log(r2); // Rectangle {}

const r3 = new Rectangle(2, -3);
console.log(r3); // Rectangle {}

const r4 = new Rectangle('2', 3);
console.log(r4); // Rectangle {}

const r5 = new Rectangle(2, 3.5);
console.log(r5); // Rectangle {}
