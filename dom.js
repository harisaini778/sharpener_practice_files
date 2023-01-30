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




