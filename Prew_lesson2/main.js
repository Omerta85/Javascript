let user = {
    name: 'Vasya', age: 31, status: true, skills: ['html', 'js'], wife: {name: 'Olya', age: 22,}
};
console.log(user);
console.log(user.name);
console.log(user.age);
console.log(user.wife);
console.log(user.wife.name);

let users = [
    {name: 'vasya', age: 31, status: true, skills: ['html', 'js'], wife: {name: 'Olya', age: 22,skills: ['html', 'js']}},
    {name: 'petya', age: 31, status: true, skills: ['html', 'js'], wife: {name: 'Anna', age: 22,skills: ['html', 'js']}},
    {name: 'max', age: 31, status: true, skills: ['html', 'js']}
];

let vasya = users[0];
console.log(vasya);
let petya = users[1];
console.log(petya);