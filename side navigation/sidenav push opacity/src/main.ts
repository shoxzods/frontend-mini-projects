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

closeBtn.addEventListener("click" , ( e:MouseEvent ) => {
    const btn = e.target as HTMLButtonElement;
    navigation_right.classList.remove("position_index");
    navigation_left.classList.add('width');
    disable.classList.remove('hidden');
    btn.classList.remove("left")
});

disable.addEventListener("click" , (e:MouseEvent) => {
    const el = e.target as HTMLDivElement;
    if (el.classList.contains("hidden")) {
        el.classList.remove('hidden');
        navigation_right.classList.remove("position_index");
        navigation_left.classList.add('width');
    }
});