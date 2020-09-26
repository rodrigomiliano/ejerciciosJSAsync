
const obtenerPokemon = require("./library");

// Codigo funcion callback
function pokemonExtraido(pokemon){
    console.log("Nombre del pokemon: " + pokemon.name);
    console.log("Habilidades: ");
    pokemon.abilities.forEach(ability => console.log("* " + ability.ability.name));
    console.log("");
}
// Fin codigo

// Usar la funcion obtenerPokemon(pokemon,funcionCallback) en donde:
// - nombrePokemon es un string con el nombre del pokemon
// - funcionCallback es una función que recibe el objeto con los datos del pokemon extraido

obtenerPokemon("gengar", pokemonExtraido);
obtenerPokemon("meowth", pokemonExtraido);
obtenerPokemon("golem", pokemonExtraido);
obtenerPokemon("poliwhirl", pokemonExtraido);
// ¿por que no respeta el orden que asigne?
// ¿por que debe ir doble ability?
// ok