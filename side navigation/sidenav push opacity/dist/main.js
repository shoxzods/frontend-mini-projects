const openNavButton = document.querySelector('.open_nav');
const closeBtn = document.getElementById("close");
const navigation_left = document.querySelector(".navigation__left");
const navigation_right = document.querySelector('.navigation__right');
const disable = document.querySelector(".disabled");
openNavButton.addEventListener("click", (e) => {
    navigation_right.classList.add("position_index");
    navigation_left.classList.remove('width');
    disable.classList.add('hidden');
});
function sameProps() {
    navigation_right.classList.remove("position_index");
    navigation_left.classList.add('width');
}
closeBtn.addEventListener("click", () => {
    sameProps();
    disable.classList.remove('hidden');
});
disable.addEventListener("click", (e) => {
    const el = e.target;
    if (el.classList.contains("hidden")) {
        el.classList.remove('hidden');
        sameProps();
    }
});
export {};
