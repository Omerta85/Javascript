
// function writer(text) {
//     document.write(`<div>${text}</div>`)
// }
// writer('hello');
// writer("okten");

// let users = [
//     {name: 'vasya', age: '31', status: false},
//     {name: 'petya', age: '30', status: true},
//     {name: 'kolya', age: '29', status: true},
//     {name: 'olya', age: '28', status: false},
//     {name: 'max', age: '30', status: true},
//     {name: 'anya', age: '31', status: false},
//     {name: 'oleg', age: '28', status: false},
//     {name: 'andrei', age: '29', status: true},
//     {name: 'masha', age: '30', status: true},
//     {name: 'olya', age: '31', status: false},
//     {name: 'max', age: '31', status: true},
// ];
// console.log(users);
//
// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
// console.log(products);
//
// function arrayPrinter(array) {
//     for (const item of array) {
//         console.log(item);
//     }
//
// }
//
// arrayPrinter(users);
// arrayPrinter(products);

// function sumTwoNumber(a, b) {
//     let res = a +b;
//     return res;
// }
//
// let x = sumTwoNumber(100, 200);
// console.log(x);


// function tax(sum, taxBound) {
//     return sum - (sum / 100) * taxBound;
// }
// let sallaWitthatPDFO = tax(10000, 15);
// console.log(sallaWitthatPDFO);
// let sallaWithPDFO_and_WarTax = tax(sallaWitthatPDFO, 2);
// console.log(sallaWithPDFO_and_WarTax);
// let result = tax(sallaWithPDFO_and_WarTax, 5);
// console.log(result);


// function calculator(a, b, action) {
//     switch (action) {
//         case'+':
//             return a + b;
//         case '-':
//             return a - b;
//     }
// }
//
// console.log(calculator(10, 20, '+'));
// console.log(calculator(10, 20, '-'));

// function foo() {
//     console.log(arguments);
// }
//
// foo(1, 2, 3, 4, 5, true, 'asd');

// function upgradeCalc() {
//     let res = 0;
//     switch (arguments[0]) {
//         case '+':
//             for (let i =1; i < arguments.length; i++) {
//                 const num = arguments[i];
//                 res += num;
//             }
//     }
// }