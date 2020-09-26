
const obtenerPersonaFake = require("./library");

// Usar la funcion obtenerPersonaFake() la cual devuelve la promesa de traer el objeto persona extraido
obtenerPersonaFake().then(dataPersona => {    
    dataPersona.results.forEach(persona => {
    console.log("Genero: " + persona.gender);
    console.log("Nombre completo: " + persona.name.title + " " + persona.name.first + " " + persona.name.last);
    console.log("Direccion: " + persona.location.street.name + " " + persona.location.street.number + ", CP: " + persona.location.postcode);
    console.log("Ciudad: " + persona.location.city + ", " + persona.location.state + ", " + persona.location.country);
    console.log("Latitud: " + persona.location.coordinates.latitude + ", Longitud: " + persona.location.coordinates.longitude);
    console.log("Zona horaria: " + persona.location.timezone.offset + " " + persona.location.timezone.description);
    console.log("Email: " + persona.email);
    console.log("Usuario: " + persona.login.username +", Contraseña: " + persona.login.password);
    console.log("Telefonos: " + persona.phone + ", " + persona.cell);
    })
    }  
    ).catch((e)=>{
        console.log("Error : ",e.error);
    })

// ¿es obligatorio poner el error?    
// ok