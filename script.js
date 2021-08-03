const smallMenuBtn = document.querySelector('.small-menu-btn');
const smallMenuLogo = document.querySelector('.menu-logo-light');
const menuBurger = document.querySelector('.menu-burger-wrap');
const closeBurgerBtn = document.querySelector('.menu-burger_close');

smallMenuBtn.addEventListener('click', ()=>( 
    smallMenuBtn.style.opacity="0",
    smallMenuLogo.style.opacity="0",
    menuBurger.style.display="block"
));

closeBurgerBtn.addEventListener('click', ()=>(
    menuBurger.style.display="none",
    smallMenuLogo.style.opacity="1",
    smallMenuBtn.style.opacity="1"
));