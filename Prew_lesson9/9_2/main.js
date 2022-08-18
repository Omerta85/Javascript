// let target = document.getElementById('target');
// console.log(target.innerText);
// // target.innerText = 'okten';
// target.style.background = 'silver';
// // console.log(target.classList);
// // target.classList.add('foo');
// // target.classList.add('bar');
// // console.log(target.classList.item(0));
// // console.log(target.classList.contains('asd'));
// // target.classList.toggle('asd');
// console.log(target.getAttribute('id'));
// // target.setAttribute('id', 'qeweqqedr');
// console.log(target.previousElementSibling);
// console.log(target.nextElementSibling);
// console.log(target.children);//html обєкти
// console.log(target.childNodes);//повертає вузли
// target.innerText = '<b>sdfysuiyfius</b>';
// target.innerHTML = '<b>sdfysuiyfius</b>';
// console.log(target.outerHTML);

let collectionOfDiv = document.getElementsByClassName('point');
for (const divElement of collectionOfDiv) {
    divElement.innerText = 'jshdfkjsh';
    divElement.classList.add('qqq');
}

