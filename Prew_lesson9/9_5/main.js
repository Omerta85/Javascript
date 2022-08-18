let target = document.querySelector('.target');
// console.log(target);
// // target.onclick = function (e) {
// //     console.log(e);
// // }
// // target.onmouseover = function (e) {
// //     console.log(e);
// // }
// // target.onmousemove = function (e) {
// //     console.log(e.clientX);
// // }
let f1 = document.forms.f1;
// f1.login.oninput = function (e) {
//     let value = this.value;
//     console.log(this.value);
//     if(value.includes('ass')){
//         alert('!!!!!!!!!');
//     }
//     // target.innerText = this.value;
// }
// f1.onsubmit = function (e) {
//     e.preventDefault();
//     console.log(this.login.value);
// }
f1.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('.');
})
f1.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(',');
})