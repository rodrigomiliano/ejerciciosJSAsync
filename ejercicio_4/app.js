
const obtenerPokemon = require("./library");

// Usar la funcion obtenerChiste(nombrePokemon) la cual recibe como string un nombre de pokemon y devuelve la promesa de traer el objeto pokemon extraido

    obtenerPokemon("mewtwo").then(pokemon => {
        console.log("Nombre del pokemon: " + pokemon.name);
        console.log("Habilidades: ");
        pokemon.abilities.forEach(ability => console.log("* ", ability.ability.name));
        console.log("");
    }).catch((e)=>{
        console.log("Error : ",e.error);
    });

    obtenerPokemon("zapdos").then(pokemon => {
        console.log("Nombre del pokemon: " + pokemon.name);
        console.log("Habilidades: ");
        pokemon.abilities.forEach(ability => console.log("* ", ability.ability.name));
        console.log("");
    }).catch((e)=>{
        console.log("Error : ",e.error);
    });

// ¿hay forma de llamar a 2 o mas sin tanto codigo? nose. La función callback que le pasas al .then definila fuera y usala pasandola por referencia
// ok    
