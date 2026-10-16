const urlPokemon = "https://pokeapi.co/api/v2/pokemon/pikachu";

async function obtenerPokemon(){
    document.body.innerHTML = "<h1>Pokemon</h1><p>Cargando...</p>";

    try{
        const respuesta = await fetch(urlPokemon);

        if(!respuesta.ok){
            throw new Error(`Error HTTP: ${respuesta.status}`);
        }


        const pokemon = await respuesta.json();
        console.log(pokemon);
        mostrarPokemon(pokemon)
    }catch (error) {
    console.error("No se pudo obtener el Pokemon:", error.message);
    document.body.innerHTML = `
      <h1>Lista de Pokemons</h1>
      <p>No se pudo cargar el Pokemon: ${error.message}</p>
    `;
  } finally {
    console.log("Petición terminada");
  }

    
}

function mostrarPokemon(pokemon) {
  document.body.innerHTML += (pokemon);
}

obtenerPokemon();