//Конструктор
// 1 варіант добавлення обєкта в обєкті
// function User(name, age, status, wife) {
//     this.name = name;
//     this.age = age;
//     this.status = status ;
//     this.wife = wife;
//     console.log(this)
// }
// new User('asd', 123,true, {name: 'fjaksfja', age: 12213, status: true });
// 2 варіант добавлення обєкта в обєкті
// function User(name, age, status, wifeName, wifeAge, wifeStatus) {
//     this.name = name;
//     this.age = age;
//     this.status = status ;
//     this.wife = {name: wifeName, age: wifeAge, status: wifeStatus}
//     console.log(this)
// }
// new User('asd', 123,true,  'fjaksfja',  12213,  true );

//прототип call apply call bind
// function User(name, age) {
//         this.name = name;
//         this.age = age;
// }
//Метод prototype
// User.prototype.greeting = function () {
//         return `hello my name is ${this.name}`;
// }
// let user = new User('vasya', 12);
// console.log(user.greeting());

//Метод apply
// let user = new User('basya', 31);
// user.greeting = function (msg) {
//         return `${msg} my name is ${this.name}`;
// };
//
// let user2 = new User('asdas', 123123);
// user.greeting.apply(user2);
// // console.log(user.greeting.apply(user2, ['hi']));
// //Метод call
// console.log(user.greeting.call(user2, 'hi'));
//Метод bind
// let user = new User('vasya', 31);
// user.greeting = msg =>{
//         return `${msg} my name is ${this.name}`;};
// let user2 = new User('petya', 123123);
// let greetingCopy = user.greeting.bind(user2, 'привіт');
// console.log(greetingCopy());

//описування класів в Javascript
// class User{
//
//         constructor(name, age) {
//                 this.name = name;
//                 this.age  = age;
//         }
//
//         // static greeting() {
//         //         return `hello my name is ${this.name}`;
//         // }
//         work() {
//                 return `work in process`;
//         }
//
// }
//
// // let user = new User('vasya', 31);
// // console.log(user);
// // console.log(user.greeting());
// // console.log(user.greeting());
//
// class Customer extends User{
//         constructor(name, age, password) {
//                 super(name, age);
//                 this.password = password;
//         }
// }
//
// let customer = new Customer('vasya', 31 ,'111');
// console.log(customer);
// customer.work();

function User(name, age) {
this.name = name;
this.age = age;
}
function Customer(name, age, password ) {
        User.apply(this, arguments);
        this.password = password;
}
let customer = new Customer('vasya', 31 ,'111');
console.log(customer);