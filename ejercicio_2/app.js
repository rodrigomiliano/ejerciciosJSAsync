
const obtenerChiste = require("./library");

// Usar la funcion obtenerChiste() la cual devuelve la promesa de traer el objeto chiste extraido

obtenerChiste().then(result => {
    console.log(result[0].setup);
    console.log(result[0].punchline);
});

// ok