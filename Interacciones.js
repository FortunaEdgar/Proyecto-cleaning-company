let titulo = document.querySelector("#nosotros h2");
let boton = document.querySelector("#btnInformacion");
let mensaje = document.querySelector("#mensaje");

// Evento del boton
boton.addEventListener("click", function () {
    titulo.textContent = "!Gracias por confiar en Cleaning Company!";

    mensaje.textContent =
    "Somos una empresa comprometida con ofrecer un servicio de limpieza profesional, seguro y de calidad.";

    mensaje.style.color = "#0d6efd";
    mensaje.style.fontweight = "bold";

    boton.textContent = "Informacion mostrada";
    boton.style.backgroundColor = "#198754";
    boton.style.color = "white";
});
