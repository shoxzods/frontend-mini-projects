"use strict";
const list = document.querySelector('.list');
const search = document.getElementById('search');
const data = ["HTML", "CSS", "JavaScript"];
// fetch('db.json')
// .then(
//     res => res.json() 
// )
// .then(
//     lang => {
//         data = [...lang.data];
//     }
// )
// .catch( err => {
//     console.log(err.message)
// });
list.innerHTML = data.map(lang => `<li>${lang}</li>`).join('');
search.addEventListener("input", (e) => {
    const str = e.target;
    const filter = data.filter(item => item.
        toLowerCase().
        includes(str.value.trim().
        toLowerCase())).map(lang => `<li>${lang}</li>`).join('');
    list.innerHTML = filter;
});
