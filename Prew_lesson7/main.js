// Ловити помилки
// console.log('start');
// try {
//     console.log('try block');
// } catch (e) {
//     console.log(e);
// } finally {
//     console.log('finally block');
// }
// console.log('end');

//давати можливість комусь обробляти помилку
// function calc(a, b) {
//     if (b === 0) {
//         throw new Error('b is 0');
//     }
//     return a/b;
// }
// calc(10, 0);

//OCO (одноокий елвіс) використовувати коли чітко розумієш що може прийти або не прийти певна інформація
// let user = undefined;
// user?.name;

// let name = 'vasya';
// let age = 31;
// let user = {
//     name,
//     age,
//     foo() {
//         console.log(this);
//     }
// }
// console.log(user);
// user.foo();

// Дестрикутризація
// let user = {
//     name : 'vasya',
//     age :31,
//     foo() {
//         console.log("foo");
//     },
// };
// let {age, name} = user;
// console.log(name);
// console.log(age);
// function asd({name}) {
//     console.log(name)
// }
// let obj = ({a: 'asduads', name: 'wqyreq'});
// asd(obj);
// let numbers = [11, 22, 33];
// let [a,  , c] = [11, 22, 33]
// console.log(a, c);

//спред (поверхнева копія)
// let user = {
//     name: 'vasya',
//     age: 123
// };
// let userCopy = {...user};
// let nums = [11, 22, 33];
// let nums2 = [...nums];

// Глибока копія
// let user = {
//     name: 'vasya',
//     skills: ['html', 'js'],
// };
// let userJsonClone = JSON.stringify(user); // convert to JSON (передає тільки інформацуію)
// console.log(userJsonClone);
// let parse = json.parse(userJsonClone); // convert to other... але функціцю назад не можливо повернути
// console.log(parse);
// let assign = Object.assign({}, user);

//Замикання
// function asd() {
//     let x = 10;
//     function inner() {
//         return ++x;
//     }
//     return inner;
// };
// let foo = asd();
// console.log(foo());

function userBuilder(name, age) {
    let user = {name, age};
    return{
        getName() {
            return user.name;
        },
        getAge() {
            return user.age;
        },
        setAge(age) {
            if(age > 0 && age > user.age) {
                user.age = age;
            }
        }
    }
}

let builder = userBuilder('vasya', 31);
console.log(builder);
console.log(builder.getAge());
console.log(builder.setAge(-100));
console.log(builder.getAge());