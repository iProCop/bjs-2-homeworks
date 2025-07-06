"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  const Discriminant = b ** 2 - 4 * a * c;

  if (Discriminant < 0) {
    return arr;
  } else if (Discriminant === 0) {
    const root = -b / (2 * a);
    arr.push(root);
  } else {
    const sqrtDiscriminant = Math.sqrt(Discriminant);
    const root1 = (-b + sqrtDiscriminant) / (2 * a);
    const root2 = (-b - sqrtDiscriminant) / (2 * a);
    arr.push(root1, root2);
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (typeof percent !== 'number' ||
      typeof contribution !== 'number' ||
      typeof amount !== 'number' ||
      typeof countMonths !== 'number') {
        return 0;
      }

const monthlyPercent = percent / 100 / 12;
const loanBody = amount - contribution;
const monthlyPayment = loanBody * (monthlyPercent + monthlyPercent / 
        ((1 + monthlyPercent) ** countMonths - 1))
const totalAmount = monthlyPayment * countMonths;

return parseFloat(totalAmount.toFixed(2));
}