const menuNav = document.querySelector('.menu-nav');
const menuIcon = document.querySelector('.fa-bars')

menuIcon.addEventListener('click', () => {
    menuNav.classList.toggle('hidden');
});