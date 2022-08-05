

}
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
for (const product of products) {
    console.log(product);
}
arrayLoop([1, 12, 3]);
function arrayLoop(array) {
    for (const item of array) {
        console.log(item);
    }
}

let users = [
    {name: 'vasya', age: '31', status: false},
    {name: 'petya', age: '30', status: true},
    {name: 'kolya', age: '29', status: true},
    {name: 'olya', age: '28', status: false},
    {name: 'max', age: '30', status: true},
    {name: 'anya', age: '31', status: false},
    {name: 'oleg', age: '28', status: false},
    {name: 'andrei', age: '29', status: true},
    {name: 'masha', age: '30', status: true},
    {name: 'olya', age: '31', status: false},
    {name: 'max', age: '31', status: true},
];
arrayLoop(users);

let x = function (array) {
    for (const arrayElement of array) {
        console.log(arrayElement);
    }
}
console.log(arrayLoop([1, 2, 3]));


function usersFilter(arrayofUsers) {
    let filteredUser = [];
    for (const user of arrayofUsers) {
        if (user.status) {
            filteredUser[filteredUser.length] = user;
        }
    }
    console.log(filteredUser);
    return filteredUser
}
//
//
//
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
// usersFilter(users);
// let resultofFilter = usersFilter(users);
// console.log();
// for (const item of resultofFilter) {
//     document.write(`<div>${item.name}</div>`);
//
// }

// function asd(...a) {
//     console.log(a);
//     // console.log(Array.isArray(a));
// }
//
// asd(1, 2, 3, 4);

// let calc = (a,b) => a + b;
//
// console.log(calc(10, 20));
//
// let user = {
//     username: 'vasya',
//     greeting: function () {
//         console.log(this);
//         return `hello my name is ${this.username}`;
//     },
//     vitannya: () => {
//         console.log(this);
//         return `hello my name is ${this.username}`;
//     }
// }
// console.log(user.greeting());