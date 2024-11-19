const Hamburger = document.querySelector('.hamburger');
const Nav = document.querySelector('nav');


Hamburger.addEventListener('click', () => {
    Nav.classList.toggle('open-menu');
})
Nav.addEventListener('click', () => {
    Nav.classList.toggle('open-menu');
})