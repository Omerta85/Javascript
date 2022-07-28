// let age = +prompt('enter your age');
// console.log(age);
// // if (age >=18) {
// //     console.log('watch your movie');
// // }
//
// if (age >=18) {
//   document.write('<h2>watch your movie</h2>');
// } else {
//     document.write('<h2>go away</h2>');
// }

// let color = prompt('enter color');
//
// if (color === 'green') {
//     console.log('you can go');
// }else if (color === 'yellow') {
//     console.log('wait');
// } else if ( color === 'red') {
//     console.log('stop');
// }else {
//     console.log('????????');
// }

// let color = prompt('enter color');
// let isRoadClear = prompt('is road clear?');
//
// if (color === 'green') {
//     if (isRoadClear === 'yes') {
//         console.log('you can go');
//     } else {
//         console.log('wait pls');
//     }
// }else if (color === 'yellow') {
//     console.log('wait');
// } else if ( color === 'red') {
//     console.log('stop');
// }else {
//     console.log('????????');
// }

// let color = prompt('enter color');
// let isRoadClear = prompt('is road clear?');
//
// if (color === 'green' && isRoadClear === 'yes') {
//         console.log('you can go');
// }else if (color === 'yellow') {
//     console.log('wait');
// } else if ( color === 'red') {
//     console.log('stop');
// }else {
//     console.log('????????');
// }

// switch ('green') {
//     case "green":
//         console.log('go!');
//         break;
//     case 'yellow':
//         console.log('wait');
//         break;
//     case 'red':
//         console.log('stop');
//         break;
//     default:
//         console.log('??????');
// }

// switch ('green') {
//     case "green":
//     case 'blue':
//         console.log('go!');
//         break;
//     case 'yellow':
//         console.log('wait');
//         break;
//     case 'red':
//         console.log('stop');
//         break;
//     default:
//         console.log('??????');
// }

// let conf = confirm('asdf');
// console.log(conf);
// // let x;
// // if (conf) {
// //     x = 100;
// // } else {
// //     x = 200;
// // }
// // console.log(x);
// let x = conf ? 100 : 200;

// let name = prompt("enter you name");
// // if (!!name) {
// //     console.log('.....')
// // } else {
// //     name = 'john doe';
// // }
//
// let name = prompt("enter you name") || 'jonh doe';
// console.log(name);


if (!!'') {
    console.log('true');
} else {
    console.log('false');
}