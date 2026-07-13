const openNavButton = document.querySelector('.open_nav') as HTMLButtonElement;
const closeBtn = document.getElementById("close") as HTMLElement;
const navigation_left = document.querySelector(".navigation__left") as HTMLElement;
const navigation_right = document.querySelector('.navigation__right') as HTMLDivElement;

openNavButton.addEventListener("click" , () => {
    navigation_right.classList.remove("position_index");
    navigation_left.classList.remove('heights');
});

closeBtn.addEventListener("click" , () => {
    navigation_right.classList.add("position_index");
    navigation_left.classList.add('heights');
})