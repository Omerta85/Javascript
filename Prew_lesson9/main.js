// console.log(document);
// console.log(document.head);
// console.log(document.head.innerHTML);
// console.log(document.head.children);
// console.log(document.body.innerHTML);
//ID
 let ul1 = document.getElementById('list-1');
 console.log(ul1);

 //class
let menuCollection = document.getElementsByClassName('menu');
console.log(menuCollection);
for (const menuCollectionElement of menuCollection) {
    console.log(menuCollectionElement);
}
//Tag
let liList = document.getElementsByTagName('li');
console.log(liList);
let list1 = document.getElementById('list-1');
console.log(list1);
let list1Colection = list1.getElementsByTagName('li');
console.log(list1Colection);


console.log(document.querySelector('ul'));
console.log(document.querySelectorAll('ul'));

let nodeListOf = document.querySelectorAll('#list2 > li');
console.log(nodeListOf);
for (const node of nodeListOf) {
    console.log(node);
}