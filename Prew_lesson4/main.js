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
]

// for (let i = 0; i < users.length; i++ ) {
//     document.write(`<div>${users[i].name} ${users[i].age} ${users[i].status}</div>`);
// }
// document.write(`<div>${users[0].name} ${users[0].age} ${users[0].status}</div>`);
// document.write(`<div>${users[1].name} ${users[1].age} ${users[1].status}</div>`);
// document.write(`<div>${users[2].name} ${users[2].age} ${users[2].status}</div>`);
// document.write(`<div>${users[3].name} ${users[3].age} ${users[3].status}</div>`);

// for (let i = 0; i < users.length; i++) {
//     const user = users[i];
//
// }

// for (let i = users.length - 1; i >= 0; i--) {
//     const user = users[i];
//     document.write(`<div>${user.name} ${user.age} ${user.status}</div>`);
// }

// for (let user of users) {
//     document.write(`<div>${user.name} ${user.age} ${user.status}</div>`);
// }

// for (const user of users) {
//     document.write(`<div>${user.name} ${user.age} ${user.status}</div>`);
// }
// let i = 0;
// while (i < users.length) {
//     let user = users[i];
//     document.write(`<div>${user.name} ${user.age} ${user.status}</div>`);
//     i++;
// }
// do {
//     console.log("jdhsjkhgfdks");
// } while (false)
// let user = {name: 'max', age: 31, status: true}
// for (let userKey in user) {
//     console.log(userKey, user[userKey]);
// }

for (const user of users) {
    document.write('<ol>');
    for (const userKey in user) {
        document.write(`<li>${userKey} - ${user[userKey]}</li>`);
    }
    document.write('</ol>');
}