document.addEventListener('DOMContentLoaded',()=>{
const menuIcon=document.getElementById('menu-icon');
const navLinks=document.querySelector('.nav-links');

console.log('script loaded',!!menuIcon, !!navLinks);

if(!menuIcon || !navLinks)return;

menuIcon.addEventListener('click',()=>{
    navLinks.classList.toggle('active'); //show or hide something
    console.log('menu toggled,active=',navLinks.classList.contains('active'))
});
});