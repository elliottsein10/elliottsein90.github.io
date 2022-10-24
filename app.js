const urlBase = 'https://rickandmortyapi.com/api/character/';

const loadData = (urlBase) => {
    fetch(urlBase)
        .then(respuesta => {
        return respuesta.json();
})
    .then(respJson => {
        const info = respJson.info;
        const personajes = respJson.results;
        console.log(info);
        console.log(personajes);
        showCharacters(personajes);
    })
}
    const showCharacters = (personajes) => {
        const listaPersonajes = document.querySelector('#characters');
        personajes.forEach(personaje => {
            const div = document.createElement('div');
            div.classList.add('col');
            div.classList.add('m-2');
            div.innerHTML = creaCard(personaje);
            listaPersonajes.appendChild(div);
        })
    }

    const creaCard = (personaje) => {
        const html = `
        <div class="card" style="width: 18rem;">
            <img src="${personaje.image}" class="card-img-top" alt="${personaje.image}">
            <div class="card-body">
                <h5 class="card-title">${personaje.name}</h5>
                <p class="card-text">${personaje.status}</p>
                <a href="#" class="btn btn-primary">Ver más</a>
            </div>
            </div>
        
        `;
        return html;
    }

    loadData(urlBase);
