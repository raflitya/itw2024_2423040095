const menuIcon = document.querySelector('.menu-icon input');
const nav = document.querySelector('nav ul');

menuIcon.addEventListener('click', function(){
nav.classList.toggle('slide');
});