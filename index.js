"use strict";
const Outer_Diameter = 0.5;
const Wall_Thickness = 0.01;
const All_Balls = 12;

let outerRadius = Outer_Diameter / 2;
let vTotal = 0;

for (let firstBall = 1; firstBall <= All_Balls; firstBall++) {
  let innerRadius = outerRadius - Wall_Thickness;
  vTotal += (4 / 3) * Math.PI * Math.pow(innerRadius, 3);
  outerRadius += Wall_Thickness;
}
console.log(vTotal.toFixed(4), "м^3");
