/** Light & Dark Variable **/
var lightDark = document.getElementById('switch');

var nav = document.getElementById('nav');
var ball =  document.getElementById('ball2');
var logo = document.getElementById('BasketWorld');
var anchor = document.getElementById('anchor');
var anchor1 = document.getElementById('anchor1');
var anchor2 = document.getElementById('anchor3');
var list = document.getElementById('list');
var list1 = document.getElementById('list1');
var list2 = document.getElementById('list2');
var list3 = document.getElementById('list3');
var navact = document.getElementById('home');
var content = document.getElementById('main-content');




lightDark.onclick = function() {
    lightDark.classList.toggle('active');
    nav.classList.toggle('active');
    ball.classList.toggle('active');
    logo.classList.toggle("active");
    anchor.classList.toggle("active");
    anchor1.classList.toggle("active");
    anchor2.classList.toggle("active");
    list.classList.toggle("active");
    list1.classList.toggle("active");
    list2.classList.toggle("active");
    list3.classList.toggle("active");
    navact.classList.toggle("active");
    content.classList.toggle('active');          
}

var timeout = document.getElementById('timeout');
var modalclose = document.getElementById('modalclose');
var cancel = document.getElementById('gd03');

timeout.onclick = function() {
    modalclose.style.visibility = "visible";
}
cancel.onclick = function() {
    modalclose.style.visibility = "hidden";
}
