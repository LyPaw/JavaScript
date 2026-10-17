document.body.innerHTML = "<h1>Pokemon</h1><p>Cargando...</p>";

const urlListaPokemon = "https://pokeapi.co/api/v2/pokemon?limit=5";
const urlPokemon = "https://pokeapi.co/api/v2/pokemon/pikachu";

async function pokemon() {
    try {
        await esperar();
        const datosLista = await obtenerDatos(urlListaPokemon);
        mostrarLista(datosLista);
        const urlPrimerPokemon = datosLista.results[0].url;
        const datosDetalle = await obtenerDatos(urlPrimerPokemon);
        mostrarDetalles(datosDetalle);

    } catch (error) {
        console.error("Error: ", error);
        document.body.innerHTML += `<p style="color: red;">Error en la aplicación: ${error.message}</p>`;
    } finally {
        console.log("Petición terminada");
    }
}


pokemon();


// Mostrar lista
function mostrarLista(pokemon){
    const lis = pokemon.results.map(p => `<li>${p.name}</li>`).join("");
    document.body.innerHTML += `<ul>${lis}</ul>`;
}

// Mostrar Detalles
function mostrarDetalles(pokemon){
    console.log(pokemon.name);
    console.log(pokemon.id);
    console.log(pokemon.types[0].type.name);
    console.log(pokemon.sprites.other.home.front_default);

    document.body.innerHTML += `<h2>${pokemon.name}<br>${pokemon.id}<br>${pokemon.types[0].type.name}<br><img src="${pokemon.sprites.other.home.front_default}">`;
}

// Obtener Datos
function obtenerDatos(url){
    return fetch(url)
    .then(respuesta => {
        if(!respuesta.ok){
            throw new Error(`Error HTTP: ${respuesta.status}`);
        }
        console.log("Respuesta recibida", respuesta);
        return respuesta.json();
    });
}

// Función de espera
function esperar() {
    return new Promise(respuesta => setTimeout(respuesta, 5000));
}