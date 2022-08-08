//Методи стрінги
// let str = 'hello okten';
// console.log(str);
// // for (const strElement of str) {
// //     console.log(strElement);
// // }
//
// //добавляє в кінець стрінги
// // let s = str.concat('!!!');
// // console.log(s);
//
// // всі букви великі
// console.log(str.toUpperCase());
// // всі букви маленькі
// console.log(str.toLowerCase());
// //починається стрінга буде або true або false
// console.log(str.startsWith("he"));
// //закінчується стрінга буде або true або false
// console.log(str.endsWith('n'));
// //стрінга обрізаєть від ппершого вставленого символу до дргуого
// console.log(str.substring(0, 7));
// // показує під яким індексом знаходиться літера
// console.log(str.indexOf('h'));
// console.log(str.lastIndexOf('o'));
// console.log(str.charAt(8));
// // console.log(str.replace('e', '!'));
// console.log(str.replaceAll('e', '!'));
// console.log(str.split(' '));

// //Методи масивів
// let arr = [];
// // перевіряє масив
// console.log(Array.isArray(arr));
// //добавляє новий елемент в масив в кінці
// arr.push('new element1');
// arr.push('new element2');
// arr.push('new element3');
// arr.push('new element4');
// arr.push('new element5');
// console.log(arr);
// //видаляє останій елемент масиву
// arr.pop();
// console.log(arr);
// //добавляє новий елемент в масив  на початку
// arr.unshift('new element0');
// console.log(arr);
// //видаляє first елемент масиву
// arr.shift();
// console.log(arr);
// //обєднати масиви
// console.log(arr.join(';'));
// //обєднання двох масивів
// let nums = [11, 22, 33];
// let concat = arr.concat(nums);
// console.log(concat);
// //реверс елементів масиву
// console.log(nums.reverse());
// // вирізання елементів з масиву
// // let slice = concat.slice(0, 4);
// // console.log(slice);
// // //один із методів заміни елементів
// // let splice = concat.splice(0,2, '!!!', "qegwiufqewgyi");
// // console.log(splice);
// // console.log(concat);
// // console.log();
// // concat.splice(concat.indexOf(11), 1);
// console.log(concat.includes(11));
// console.log('hello okten'.includes('ok'));

//Callbacks
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
// users.forEach(function (value){
//     console.log(value);
// });
// users.forEach(value => console.log(value));
// let fiteredUsers = users.filter(value => value.age > 30);
// console.log(fiteredUsers);
// let mapedUsers = users.map(function (value, index) {
//     return  {
//         name : value.name,
//         age : value.age,
//         status : value.status,
//         id : index + 1
//     };
// });
// console.log(mapedUsers);
// let mapedUsers = users.map(function (value, index) {
//     return  {...value, id : index + 1};
// });
// console.log(mapedUsers);
// let find = users.find(value => value.name === 'max');
// console.log(find);
// console.log(users.every(value => value.status));
// console.log(users.some(value => value.status));
// let sort = users.sort((u1,u2) => {
//     return u2.age - u1.age;
// });
// console.log(sort);
// console.log(users.sort((a, b) => {
//     if( a.name > b.name) {
//         return 1;
//     }
//     if (a.name < b.name) {
//         return -1;
//     }
//     if ( a.name === b.name){
//         return 0;
//     }
// }));
// let reduce = users.reduce((accumulator, user) => {
//     if(user.status) {
//         accumulator.statT.push(user);
//     } else {
//         accumulator.statF.push(user);
//     }
//     return accumulator;
// }, {statT:[], statF:[]});
// console.log(reduce);

function filter(array, predicateFn) {
    let filterArr = [];
    for (const element of array) {
       if (predicateFn(element)) {
            filterArr.push(element);
       }

    }
    return filterArr;
}

console.log(filter(users, (item) => item.status));
console.log(filter(users, (item) => item.age>30));