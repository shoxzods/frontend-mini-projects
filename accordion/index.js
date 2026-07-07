const accordion__items = document.querySelectorAll('.accordion__items');

accordion__items.forEach(
    item => item.addEventListener("click" , (e) => {
        const getClass = e.currentTarget.className.split(' ')[1];
        const icon = document.querySelector(`.${getClass} > .accordion__text > i`);
        const changeIcon = icon.className.split(' ')[1] == "bi-plus" ? 'bi-dash' : 'bi-plus';
        icon.classList.replace(icon.className.split(' ')[1] , changeIcon);
        const accordions = document.getElementById(getClass);
        accordions.classList.toggle('hidden')
    })
)