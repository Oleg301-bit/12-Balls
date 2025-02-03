"use strict";
const outerDiameter = 0.5;
const wallThickness = 0.01;
const allBalls = 12;

let outerRadius = outerDiameter / 2;
let vTotal = 0;

for (let firstBall = 1; firstBall <= allBalls; firstBall++) {
  let innerRadius = outerRadius - wallThickness;
  vTotal += (4 / 3) * Math.PI * Math.pow(innerRadius, 3);
  outerRadius += wallThickness;
}
console.log(vTotal.toFixed(4), "м^3");
