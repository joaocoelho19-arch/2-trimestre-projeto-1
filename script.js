// Esperar a que el documento esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    
    console.log("¡Bienvenido a AgroTech! El sitio está listo.");

    const botonDescubrir = document.getElementById("btn-descubrir");
    const seccionInnovaciones = document.getElementById("innovaciones");

    // Agregar evento de click al botón
    botonDescubrir.addEventListener("click", () => {
        // Desplazamiento suave hacia la sección de innovaciones
        seccionInnovaciones.scrollIntoView({ behavior: "smooth" });
    });
});