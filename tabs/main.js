const list = document.getElementById('list');
const list_node = document.querySelectorAll('li');
const description = document.querySelector('#description');
const title = document.querySelector('#description > .title');
const country = document.querySelector('#description > p > .country');
const capital = document.querySelector('#description > p > .capital');
let myData = {};

fetch('db.json').then(
    res => res.json()
).then(
    data => {
        myData = {...data};     
    }
).catch(err => console.log(err.message));

list.onclick = e => { 
    if ( e.target.dataset.type ) {
        list_node.forEach( list => list.classList.remove("bg-[#d2d2d2]") );
        description.classList.add('animate-fade');
        e.target.classList.add("bg-[#d2d2d2]");
        title.innerHTML = myData[e.target.dataset.type].capital;
        capital.innerHTML = myData[e.target.dataset.type].capital;
        country.innerHTML = myData[e.target.dataset.type].country;
    }

    setTimeout( () => {
        description.classList.remove('animate-fade');    
    } , 500 )
};