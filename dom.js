// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[25]);
// console.log(document.forms);
// console.log(document.links);
// console.log(document.forms[0]);
var a1 = document.getElementById('header-title');
console.log(a1);
console.log(a1.textContent);
console.log(a1.innerText);
console.log(a1.innerHTML);
var a2 = document.getElementsByClassName("list-items");
console.log(a2);
console.log(a2[0]);
console.log(a2[1]);
for(var i=0;i<a2.length;i++) {
    a2[i].style.backgroundColor='grey';
    a2[i].style.fontWeight='bold';
}
var a3 =document.getElementsByClassName("ullistitems");
console.log(a3);
console.log(a2[1].innerText);
console.log(a2[1].innerHTML);
console.log(a2[1].textContent);
var a4 = document.getElementsByTagName("li");
console.log(a4);
var a5 = document.querySelector("input");
a5.value = "Hari Kumar Saini";
var a6 = document.querySelector('input[type="submit"]');
a6.value ='Send';
var a7 = document.querySelector('.list-items:last-child');
a7.style.color = "red";
var a8 = document.querySelector('.list-items:nth-child(2)');
a8.style.color = "coral";
var a9 = document.querySelectorAll(".list-items:nth-child(odd)");
for(var i =0; i < a9.length; i++) {
a9[i].style.backgroundColor = "bisque";
}
var a10 = document.querySelectorAll(".list-items:nth-child(even)");
for(var i =0; i < a10.length; i++) {
a10[i].style.backgroundColor = "white";
}
var a11 = document.querySelectorAll(".list-items:nth-child(2)");
for(var i=0;i<a11.length;i++) {
a11[i].style.color = 'green';
}
var a12 = document.querySelectorAll(".list-items:nth-child(odd)");
for(var i=0;i<a12.length;i++) {
a12[i].style.backgroundColor = 'green';
}
var a13 = document.querySelector(".list-items:nth-child(3)");
a13.style.visibility = 'hidden';
var b1 = document.querySelector('.list-items');
console.log(b1.parentNode);
var b2 =  b1.parentNode.parentNode;
console.log(b1.parentNode.parentNode);
b2.style.backgroundColor='grey';
var b3 = b2.parentNode;
console.log(b3);
var c1 = document.querySelector(".list-items");
console.log(c1.parentElement);
var c2 = c1.parentElement;
var c3 = c2.parentElement;
c3.style.backgroundColor="bisque";
// var c4 = document.querySelector('.list-items');
// console.log(c4.childNodes);
// console.log(c4.childNode);
var c5 = document.querySelector('.ullistitems');
console.log(c5.childNodes);
// console.log(c5.childNode[1]);
var c6 = document.querySelector('.ullistitems');
console.log(c6.children);
var c7 = c6.children[1];
c7.style.backgroundColor='yellow';
var d1 = document.querySelector('.ullistitems');
console.log(d1.firstElementChild);
var d2 = d1.firstElementChild;
d2.innerText = 'Hello 1';
var d3 = d1.lastElementChild;
d3.innerText = 'Hello 5';
var d4 = d1.nextElementSibling;
console.log(d4);
var d5 = document.querySelector('.list-items');
var d6 = d5.nextElementSibling;
console.log(d6);
var d7 = document.querySelectorAll('.list-items');
var d8 = d7[2].nextElementSibling;
console.log(d8);
d8.textContent = 'Hello 3';
var d9 = d8.previousElementSibling;
console.log(d9);
d9.style.visibility='visible';
var newDiv = document.createElement('div');
console.log(newDiv);
newDiv.className = 'Hello';
newDiv.id = 'Hello 1';
newDiv.setAttribute('title','Hello Div');
console.log(newDiv);
var newDivTextNode = document.createTextNode('Hello Hari');
newDiv.appendChild(newDivTextNode);
console.log(newDivTextNode);
console.log(newDiv);
var container = document.querySelector('.div1');
console.log(container);
var divHeader = document.querySelector('h1');
console.log(divHeader);
container.insertBefore(newDiv,divHeader);
var e1 = container.insertBefore(newDiv,divHeader);
e1.style.fontSize='30px';
e1.style.paddingTop = '10px';
e1.style.paddingLeft='70px';
e1.style.fontWeight ='bold';




