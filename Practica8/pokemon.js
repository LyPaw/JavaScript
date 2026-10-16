document.body.innerHTML = "<h1>Pokemon</h1><p>Cargando...</p>";

const urlCafe = "https://pokeapi.co/api/v2/pokemon/pikachu";

function obtenerDatos(url) {
  return fetch(url).then(respuesta => {
    if (!respuesta.ok) {
      throw new Error(`Error HTTP: ${respuesta.status}`);
    }
    return respuesta.json();
  });
}

function mostrarPokemon(pokemon) {

document.body.innerHTML+=(
    '<img style="margin-left:25em" height="189" src="' + pokemon.sprites.other.showdown.front_female + '"><br>');
document.body.innerHTML+=(
    '<img height="300" src="' + pokemon.sprites.other.showdown.back_shiny + '">');
}


obtenerDatos(urlCafe)
  .then(pokemon => {
    mostrarPokemon(pokemon);
  })
  .catch(error => {
    console.error("No se pudo obtener el café:", error.message);
});

