var orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 }
];

// var totalAmount = 0;

// for (var i = 0; i < orders.length; i++) {
//     totalAmount += orders[i].amount;
// }

// var i = 0;
// while (i < orders.length) {
//     totalAmount += orders[i].amount;
//     i++;
// }

// function addOrderAmount (sum, order) {
//     console.log(sum, order);
//     return sum + order.amount;
// }

// var totalAmount = orders.reduce(addOrderAmount, 0)

var totalAmount = orders.reduce((sum, order) => sum + order.amount, 0)

console.log(totalAmount);
