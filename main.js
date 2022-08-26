// Examine the document obejct//
// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title=123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent="Hello";
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

// console.log(document.getElementById('header-title'));
// let headerTitle = document.getElementById('header-title');
let header= document.getElementById('main-header');

header.style.borderBottom='solid 3px #000';
let title=document.querySelectorAll('.title');
title[0].style.color='green';
title[0].style.fontWeight='bold';