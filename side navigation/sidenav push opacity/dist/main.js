const openNavButton = document.querySelector('.open_nav');
const closeBtn = document.getElementById("close");
const navigation_left = document.querySelector(".navigation__left");
const navigation_right = document.querySelector('.navigation__right');
const disable = document.querySelector(".disabled");
openNavButton.addEventListener("click", (e) => {
    const btn = e.target;
    navigation_right.classList.add("position_index");
    navigation_left.classList.remove('width');
    disable.classList.add('hidden');
    btn.classList.add("left");
});
closeBtn.addEventListener("click", (e) => {
    const btn = e.target;
    navigation_right.classList.remove("position_index");
    navigation_left.classList.add('width');
    disable.classList.remove('hidden');
    btn.classList.remove("left");
});
disable.addEventListener("click", (e) => {
    const btn = e.target;
    const el = e.target;
    if (el.classList.contains("hidden")) {
        el.classList.remove('hidden');
        navigation_right.classList.remove("position_index");
        navigation_left.classList.add('width');
        btn.classList.remove("left");
    }
});
export {};
