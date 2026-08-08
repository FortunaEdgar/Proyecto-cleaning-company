// ==========================================
// CLEANING COMPANY - INTERACCIONES JAVASCRIPT
// ==========================================


// ---------- INTERACCIÓN: CONOCE MÁS ----------
let titulo = document.querySelector("#nosotros h2");
let boton = document.querySelector("#btnInformacion");
let mensaje = document.querySelector("#mensaje");

let informacionMostrada = false;

boton.addEventListener("click", function () {

    if (informacionMostrada === false) {

        titulo.textContent = "¡Gracias por confiar en Cleaning Company!";

        mensaje.textContent =
            "Somos una empresa comprometida con ofrecer un servicio de limpieza profesional, seguro y de calidad.";

        mensaje.style.color = "#0d6efd";
        mensaje.style.fontWeight = "bold";

        boton.textContent = "Mostrar menos";

        informacionMostrada = true;

    } else {

        titulo.textContent = "¿Quiénes somos?";

        mensaje.textContent = "";

        boton.textContent = "Conoce más";

        informacionMostrada = false;
    }

});

// ---------- BOTÓN DE COTIZACIÓN ----------

// Creamos el botón desde JavaScript
let botonCotizacion = document.createElement("button");

botonCotizacion.textContent = "Solicitar cotización";

botonCotizacion.style.marginTop = "15px";
botonCotizacion.style.padding = "10px 20px";
botonCotizacion.style.border = "none";
botonCotizacion.style.borderRadius = "5px";
botonCotizacion.style.backgroundColor = "#0d6efd";
botonCotizacion.style.color = "white";
botonCotizacion.style.cursor = "pointer";

// Lo colocamos debajo del botón "Conoce más"
document.querySelector("#nosotros").appendChild(botonCotizacion);


// Evento del botón de cotización
botonCotizacion.addEventListener("click", function () {

    let servicio = prompt(
        "¿Qué servicio desea cotizar?\n\n" +
        "1 - Limpieza Residencial\n" +
        "2 - Limpieza de Oficinas\n" +
        "3 - Limpieza Comercial\n" +
        "4 - Limpieza Profunda\n" +
        "5 - Limpieza Post-Construcción"
    );

    let precio;
    let nombreServicio;

    if (servicio === "1") {
        nombreServicio = "Limpieza Residencial";
        precio = 1500;
    }
    else if (servicio === "2") {
        nombreServicio = "Limpieza de Oficinas";
        precio = 2500;
    }
    else if (servicio === "3") {
        nombreServicio = "Limpieza Comercial";
        precio = 3000;
    }
    else if (servicio === "4") {
        nombreServicio = "Limpieza Profunda";
        precio = 4000;
    }
    else if (servicio === "5") {
        nombreServicio = "Limpieza Post-Construcción";
        precio = 5500;
    }
    else {
        alert("Opción no válida.");
        return;
    }

    alert(
        "Cotización de Cleaning Company\n\n" +
        "Servicio: " + nombreServicio + "\n" +
        "Precio estimado: RD$" + precio.toLocaleString()
    );
});


// ---------- MODO OSCURO ----------

// Creamos el botón desde JavaScript
// ---------- MODO OSCURO ----------

let botonModo = document.createElement("button");

botonModo.textContent = "Modo oscuro";

botonModo.style.position = "fixed";
botonModo.style.bottom = "20px";
botonModo.style.right = "20px";
botonModo.style.padding = "10px 15px";
botonModo.style.border = "none";
botonModo.style.borderRadius = "5px";
botonModo.style.backgroundColor = "#212529";
botonModo.style.color = "white";
botonModo.style.cursor = "pointer";
botonModo.style.zIndex = "1000";

document.body.appendChild(botonModo);


// Activar y desactivar modo oscuro

let modoOscuro = false;

botonModo.addEventListener("click", function () {

    if (modoOscuro === false) {

        // Fondo
        document.body.style.backgroundColor = "#212529";
        document.body.style.color = "white";

        // Cambiar color de los títulos
        document.querySelectorAll("h1, h2, h3").forEach(function(elemento) {
            elemento.style.color = "white";
        });

        // Cambiar color de los párrafos
        document.querySelectorAll("p").forEach(function(elemento) {
            elemento.style.color = "white";
        });

        // Cambiar color de las listas
        document.querySelectorAll("li").forEach(function(elemento) {
            elemento.style.color = "white";
        });

        // Cambiar color de los textos de las tablas
        document.querySelectorAll("td, th").forEach(function(elemento) {
            elemento.style.color = "white";
        });

        botonModo.textContent = "Modo claro";

        botonModo.style.backgroundColor = "#f8f9fa";
        botonModo.style.color = "#212529";

        modoOscuro = true;

    } else {

        // Volver al modo claro
        document.body.style.backgroundColor = "";
        document.body.style.color = "";

        document.querySelectorAll("h1, h2, h3, p, li, td, th").forEach(function(elemento) {
            elemento.style.color = "";
        });

        botonModo.textContent = "Modo oscuro";

        botonModo.style.backgroundColor = "#212529";
        botonModo.style.color = "white";

        modoOscuro = false;
    }

});