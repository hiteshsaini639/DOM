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


// //getElementById
// let header= document.getElementById('main-header');
// let title=document.querySelectorAll('.title');
// header.style.borderBottom='solid 3px #000';
// title[0].style.color='green';
// title[0].style.fontWeight='bold'

// //getElementsByClassName
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

// //getElementsBytagName
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

// //querySelector
// let header=document.querySelector('#main-header');
// header.style.borderBottom='solid 4px #ccc';

// let input=document.querySelector('input');
// input.value='Hello world';

// let submit=document.querySelector('input[type="submit"]');
// submit.value="SEND";

// let item=document.querySelector('.list-group-item');
// item.style.color='red';

// let lastItem=document.querySelector('.list-group-item:last-child');
// lastItem.style.color='blue';


// //1
// let secondItem=document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.background='green';
// // 2
// let thirdItem=document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.visibility= 'hidden';

// //querySelectorAll
// let title=document.querySelectorAll('.title');
// title[0].textContent="Hello";

// // 1
// title[1].style.color="green";

// // 2
// let odd=document.querySelectorAll('li:nth-child(odd)');

// for(let i=0;i<odd.length;i++){
//     odd[i].style.background="lightgreen";
// }

// Traversing the dom //
//let itemList=document.querySelector('#items');

// //parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.background="#aaa";
// console.log(itemList.parentNode.parentNode.parentNode);

// //parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.background="#aaa";
// console.log(itemList.parentElement.parentElement.parentElement);

// //childNodes
// console.log(itemList.childNodes);

// //children
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.background="yellow";

// // FirstChild
// console.log(itemList.firstChild);

// // firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent="Hello";

// //lastChild
// console.log(itemList.lastChild);

// // lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent="Hello";

// //nextSibling
// console.log(itemList.nextSibling);

// // nextElementSibling
// console.log(itemList.nextElementSibling);

// //previousSibling
// console.log(itemList.previousSibling);

// // previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color="green";

// // createElement
//create a div
// let newDiv= document.createElement('div');

// // Add class
// newDiv.className='class';

// // Add id
// newDiv.id='id';

// // Add attr
// newDiv.setAttribute('title','attr');

// // create text node
// let newDivText=document.createTextNode('Hello World');

// // Add text to div
// newDiv.appendChild(newDivText);
// console.log(newDiv);

// let container=document.querySelector('header .container');
// let h1=document.querySelector('header h1');

// newDiv.style.fontSize='30px';
// container.insertBefore(newDiv,h1);

// // 1
let div1=document.createElement('div');
let text1=document.createTextNode('HEllo');
div1.appendChild(text1);

let container=document.querySelector('header .container');
let h1=document.querySelector('h1');
container.insertBefore(div1,h1);

// // 2
let div2=document.createElement('div');
let text2=document.createTextNode('HEllo');
div2.appendChild(text2);

let main=document.getElementById('main');
let ul=document.querySelector('ul');
main.insertBefore(div2,ul);