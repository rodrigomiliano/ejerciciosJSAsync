
const obtenerPokemon = require("./library");

// Codigo funcion callback

function pokemonExtraido(pokemon){
    console.log(pokemon[0].name);
    //console.log(pokemon[0].punchline);
}

// Fin codigo

// Usar la funcion obtenerPokemon(pokemon,funcionCallback) en donde:
// - nombrePokemon es un string con el nombre del pokemon
// - funcionCallback es una función que recibe el objeto con los datos del pokemon extraido

obtenerPokemon("pikachu", pokemonExtraido);