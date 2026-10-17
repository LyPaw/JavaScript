document.body.innerHTML = "<h1>Pokemon</h1><p>Cargando...</p>";

const urlListaPokemon = "https://pokeapi.co/api/v2/pokemon?limit=5";
const urlPokemon = "https://pokeapi.co/api/v2/pokemon/pikachu";

/*
//Solo listado
const listaPokemon = fetch(urlListaPokemon)
  .then(respuesta => {
    if(!respuesta.ok){
      throw new Error(`Error HTTP: ${respuesta.status}`)
    }
    console.log("Respuesta recibida" , respuesta)
    return respuesta.json();
  })
  .then(pokemon => {
    console.log("Objeto Pokemon: " , pokemon.results);
    console.log("Tipo de dato: " , typeof pokemon);
    console.log(pokemon);
    //mostrarLista(pokemon);
  })
  .catch(error => console.error("Error: ",error));


//Solo detalles
const detallesPokemon = fetch(urlPokemon)
  .then(respuesta => {
    if(!respuesta.ok){
      throw new Error(`Error HTTP: ${respuesta.status}`)
    }
    console.log("Respuesta recibida" , respuesta)
    return respuesta.json();
  })
  .then(pokemon => {
    console.log("Objeto Pokemon: " , pokemon.results);
    console.log("Tipo de dato: " , typeof pokemon);
    console.log(pokemon);
    //mostrarDetalles(pokemon);
  })
  .catch(error => console.error("Error: ",error));



//Anidado
const detallesPokemonAnidado = fetch(urlListaPokemon)
  .then(respuesta => {
    if(!respuesta.ok){
      throw new Error(`Error HTTP: ${respuesta.status}`)
    }
    console.log("Respuesta recibida" , respuesta)
    return respuesta.json();
  })
  .then(pokemon => {
    mostrarLista(pokemon);
    const detallePokemon = pokemon.results[1].url;
    return fetch(detallePokemon);
  })
  .then(respuestaDetalle => {
    if(!respuestaDetalle.ok){
      throw new Error(`Error HTTP: ${respuestaDetalle.status}`);
    }
    return respuestaDetalle.json();
  })
  .then(detalles => {
    mostrarDetalles(detalles);
  })
  .catch(error => console.error("Error: ",error));

*/

  //Reutilizables
    const reutilizables = esperar()
    .then(() => obtenerDatos(urlListaPokemon))
    .then(pokemon => {
      mostrarLista(pokemon);
      const detallePokemon = pokemon.results[1].url;
      return obtenerDatos(detallePokemon);
    })
    .then(detalles => {
      mostrarDetalles(detalles)
    })
  .catch(error => console.error("Error: ",error))
  .finally(() => console.log("Peticion terminada"));



  //Funciones

  //Mostrar lista
  function mostrarLista(pokemon){
      const lis = pokemon.results.map(p => `<li>${p.name}</li>`).join("");
      document.body.innerHTML += `<ul>${lis}</ul>`;
  }

  //Mostrar Detalles
  function mostrarDetalles(pokemon){
      console.log(pokemon.name);
      console.log(pokemon.id);
      console.log(pokemon.types[0].type.name);
      console.log(pokemon.sprites.other.home.front_default);

      document.body.innerHTML +=(`<h2>${pokemon.name}<br>${pokemon.id}<br>${pokemon.types[0].type.name}<br><img src="${pokemon.sprites.other.home.front_default}">`)

  }

  //Obtener Datos
  function obtenerDatos(url){
    return fetch(url)
    .then(respuesta => {
    if(!respuesta.ok){
      throw new Error(`Error HTTP: ${respuesta.status}`)
    }
    console.log("Respuesta recibida" , respuesta)
    return respuesta.json();
  })
  }

  function esperar() {
    return new Promise(respuesta => setTimeout(respuesta,5000))
  }