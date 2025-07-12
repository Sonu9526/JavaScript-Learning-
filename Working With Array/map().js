const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroTOUsd = 1.1;
const movementToUsd = movements.map((mov) => mov * euroTOUsd);
// console.log(movementToUsd);
const movDesc = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? "Deposite" : "Withdraw"} ${mov}`
);
console.log(movDesc);
