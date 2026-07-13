const openNavButton = document.querySelector('.open_nav') as HTMLButtonElement;
const closeBtn = document.getElementById("close") as HTMLElement;
const navigation_left = document.querySelector(".navigation__left") as HTMLElement;
const navigation_right = document.querySelector('.navigation__right') as HTMLDivElement;
const disable = document.querySelector(".disabled") as HTMLDivElement;

openNavButton.addEventListener("click" , (e:MouseEvent) => {
    navigation_right.classList.add("position_index");
    navigation_left.classList.remove('width');
    disable.classList.add('hidden');
});

function sameProps() {
    navigation_right.classList.remove("position_index");
    navigation_left.classList.add('width');

}

closeBtn.addEventListener("click" , () => {
    sameProps();
    disable.classList.remove('hidden');
});

disable.addEventListener("click" , (e:MouseEvent) => {
    const el = e.target as HTMLDivElement;
    if (el.classList.contains("hidden")) {
        el.classList.remove('hidden');
        sameProps();
    }
});