"use strict";

function solveEquation(a, b, c) {
  const d = b ** 2 - 4 * a * c;
  if (d < 0) {
    return []
  }
  if (b === 0) {
    return [-b / (2 * a)]
  }
  return [
    (-b + Math.sqrt(d)) / (2 * a),
    (-b - Math.sqrt(d)) / (2 * a)
  ]
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
