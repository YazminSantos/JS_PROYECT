const URL= '../data/'

fetch(URL)
    .then( respuesta => respuesta.json() )
    .then( datos => {
        // console.log(datos);
        agregarNamesAlDOM(datos.results)
    })

function agregarNamesAlDOM(mascotas) {
    let root = document.getElementById('root')
    root.innerHTML = null
    planets.forEach(p => {
        // console.log(p.name);
        let li = document.createElement('li')
        li.innerText = p.name
        root.appendChild(li)
    });
}