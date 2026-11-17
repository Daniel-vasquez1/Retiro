// ======================================
// FUNCIONES DE LA PÁGINA DEL RETIRO
// ======================================

// MENÚ DE NAVEGACIÓN

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", () => {

    const abierto = navMenu.classList.toggle("open");

    menuButton.setAttribute("aria-expanded", abierto);

    menuButton.setAttribute(
        "aria-label",
        abierto ? "Cerrar menú" : "Abrir menú"
    );

});

// CERRAR MENÚ AL SELECCIONAR UNA OPCIÓN

document.querySelectorAll(".nav-menu a").forEach(enlace => {

    enlace.addEventListener("click", () => {

        navMenu.classList.remove("open");

        menuButton.setAttribute("aria-expanded", "false");

    });

});

// BARRA DE PROGRESO

const progress = document.getElementById("progress");

function actualizarProgreso() {

    const recorrido = document.documentElement.scrollTop;

    const total =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const porcentaje = total > 0
        ? recorrido / total * 100
        : 0;

    progress.style.width = porcentaje + "%";

}

window.addEventListener("scroll", actualizarProgreso);

// BOTÓN VOLVER ARRIBA

const backTop = document.getElementById("backTop");

window.addEventListener("scroll", () => {

    backTop.classList.toggle(
        "show",
        window.scrollY > 400
    );

});

backTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// AÑO AUTOMÁTICO

document.getElementById("year").textContent =
    new Date().getFullYear();

// AMPLIAR FOTOGRAFÍA

const mainPhoto = document.getElementById("mainPhoto");

const lightbox = document.getElementById("lightbox");

const closeLightbox =
    document.getElementById("closeLightbox");

// ABRIR FOTOGRAFÍA

mainPhoto.addEventListener("click", () => {

    lightbox.classList.add("open");

    closeLightbox.focus();

});

// CERRAR FOTOGRAFÍA

function cerrarFoto() {

    lightbox.classList.remove("open");

    mainPhoto.focus();

}

closeLightbox.addEventListener("click", cerrarFoto);

// CERRAR AL HACER CLIC FUERA DE LA IMAGEN

lightbox.addEventListener("click", event => {

    if (event.target === lightbox) {

        cerrarFoto();

    }

});

// CERRAR CON LA TECLA ESCAPE

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        cerrarFoto();

    }

});