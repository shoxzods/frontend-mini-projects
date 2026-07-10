const openNavButton = document.querySelector('.open_nav');
const closeBtn = document.getElementById("close");
const navigation_left = document.querySelector(".navigation__left");
const navigation_right = document.querySelector('.navigation__right');
openNavButton.addEventListener("click", () => {
    navigation_right.classList.remove("position_index");
    navigation_left.classList.remove('width');
});
closeBtn.addEventListener("click", () => {
    navigation_right.classList.add("position_index");
    navigation_left.classList.add('width');
});
export {};
