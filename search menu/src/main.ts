const list = document.querySelector('.list') as HTMLUListElement;
const search = document.getElementById('search') as HTMLInputElement;
const data:string[] = ["HTML" , "CSS" , "JavaScript"];

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

list.innerHTML = data.map(
    lang =>`<li>${lang}</li>`
).join('');


search.addEventListener("input" , ( e: InputEvent) => {
    const str = e.target as HTMLInputElement;
    const filter = data.filter( 
        item => item.
                toLowerCase().
                includes(str.value.trim().
                toLowerCase())).map( lang => `<li>${lang}</li>` ).join('');
    list.innerHTML = filter;
});