// Examine the document obejct//
//console.dir(document);
//console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title=123;
// console.log(document.doctype);
//console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textContent="Hello";
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

// console.log(document.getElementById('header-title'));
// let headerTitle = document.getElementById('header-title');
// console.log(headerTitle);
// headerTitle.textContent='Hello';
// headerTitle.innerText='GoodBye';
// headerTitle.innerHTML='<h3>HELLO</h3>';


//getElementById
// let header= document.getElementById('main-header');
// let title=document.querySelectorAll('.title');
// header.style.borderBottom='solid 3px #000';
// title[0].style.color='green';
// title[0].style.fontWeight='bold'

//getElementsByClassName
// let items=document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent="Hello 2";
// //items[1].style.fontWeight='bold';
// items[1].style.backgroundColor="yellow";
// items[2].style.backgroundColor="green";

// for(let i=0;i<items.length;i++){
//     items[i].style.fontWeight='bold';
// }

// getElementsBytagName
// let li=document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent="Hello 2";
// //li[1].style.fontWeight='bold';
// li[1].style.backgroundColor="yellow";
// li[2].style.backgroundColor="green";

// for(let i=0;i<li.length;i++){
//     li[i].style.fontWeight='bold';
// }

//querySelector
let header=document.querySelector('#main-header');
header.style.borderBottom='solid 4px #ccc';

let input=document.querySelector('input');
input.value='Hello world';

let submit=document.querySelector('input[type="submit"]');
submit.value="SEND";

let item=document.querySelector('.list-group-item');
item.style.color='red';

let lastItem=document.querySelector('.list-group-item:last-child');
lastItem.style.color='blue';


// 1
// let secondItem=document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.background='green';
// // 2
// let thirdItem=document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.visibility= 'hidden';

//querySelectorAll
let title=document.querySelectorAll('.title');
title[0].textContent="Hello";

// 1
title[1].style.color="green";

// 2
let odd=document.querySelectorAll('li:nth-child(odd)');

for(let i=0;i<odd.length;i++){
    odd[i].style.background="lightgreen";
}