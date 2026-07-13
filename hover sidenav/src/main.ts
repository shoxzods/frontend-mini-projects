// types:
type datatype = { title?:string , color?:string };

const ul = document.querySelector("ul") as HTMLUListElement;

window.onload = () => {
    fetch('src/db/db.json')
    .then( res => res.json())
    .then( data => {
        const mapping:string = data
        .map( (lists:datatype) => {
            return `<li class="text-lg pl-5 p-3 rounded-tr-md rounded-br-md max-w-30 cursor-pointer ${lists.color} -translate-x-21 duration-150 ease-linear hover:translate-x-0">${lists.title}</li>`
        })
        .join('');

        ul.innerHTML = mapping;
    })
    .catch( err => {
        if ( err instanceof Error )
                console.table({ name:err.name , message: err.message })
    })
}