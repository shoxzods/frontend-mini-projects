const list = document.getElementById('list');
const list_node = document.querySelectorAll('li');
const description = document.querySelector('#description');
const title = document.querySelector('#description > .title');
const message = document.querySelector('#description > p');
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
        list_node.forEach( list => {
            list.classList.remove(`bg-[${myData[list.dataset.type].color}]`);
            list.classList.replace(`hover:bg-[${myData[list.dataset.type].color}]` , `hover:bg-[#d2d2d2]`);
            list.classList.remove(`text-white`);
            description.classList.replace(`bg-[${myData[list.dataset.type].color}]` , 'bg-none')    
        });

        description.classList.replace('bg-none' , `bg-[${myData[e.target.dataset.type].color}]`) 
        e.target.classList.add(`bg-[${myData[e.target.dataset.type].color}]`);
        e.target.classList.add('text-white');
        title.innerHTML = myData[e.target.dataset.type].title;
        message.innerHTML = myData[e.target.dataset.type].description;
        e.target.classList.replace('hover:bg-[#d2d2d2]', `hover:bg-[${myData[e.target.dataset.type].color}]`)
    }
};