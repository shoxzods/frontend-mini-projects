const menuButton = document.querySelector('.menu-active');

function toggleBtn() {
    const top = document.querySelector('.top');
    const center = document.querySelector('.center');
    const bottom = document.querySelector('.bottom');

    top.classList.toggle('menu-active__items--top');
    center.classList.toggle('menu-active__items--center');
    bottom.classList.toggle('menu-active__items--bottom')
}

menuButton.addEventListener("click" , toggleBtn);