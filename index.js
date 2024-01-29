/* ********************** /
/*     MENU RESPONSIVE  */
/********************* */

let overlay = document.querySelector('#overlay');
let menuHamburger = document.querySelector('.menu-hamburger');
let menuResponsive = document.querySelector('.menu-responsive');
let menuClose = document.querySelector('.btn-close-responsive');

menuHamburger.addEventListener('click', () => {
    menuResponsive.classList.add('active');
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

menuClose.addEventListener('click', () => {
    menuResponsive.classList.remove('active');
    overlay.style.display = 'none';
    document.body.style.overflow = 'auto';
})


/* ********************************** */
/*   Carousel de acerca de nosotros   */
/* ********************************** */


const btnLeft = document.querySelector(".btn-left"),
      btnRight = document.querySelector(".btn-right"),
      slider = document.querySelector("#slider"),
      sliderSection = document.querySelectorAll(".slider-section");

let counter = 0,
    widthImg = 100 / sliderSection.length;

btnLeft.addEventListener("click", () => moveToLeft());
btnRight.addEventListener("click", () => moveToRight());

function moveToRight() {
    if (counter >= sliderSection.length - 1) {
        counter = 0;
    } else {
        counter++;
    }

    updateSlider();
}

function moveToLeft() {
    if (counter <= 0) {
        counter = sliderSection.length - 1;
    } else {
        counter--;
    }

    updateSlider();
}

function updateSlider() {
    let operacion = widthImg * counter;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s";
}

// setInterval sirve para que el desplazamiento sea automatico setInterval


/* ********************************** */
/*               contact us           */
/* ******************************** */



const datosAlmacenados = [];

function validarFormulario() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const correo = document.getElementById('correo').value;
    const mensaje = document.getElementById('mensaje').value;

    if (nombre && apellido && correo && mensaje) {
        if (correo.includes('@')) {

            const nuevoEnvio = {
                nombre: nombre,
                apellido: apellido,
                correo: correo,
                mensaje: mensaje
            };


            datosAlmacenados.push(nuevoEnvio);


            console.log('Datos almacenados:', datosAlmacenados);

            alert('Mensaje enviado con éxito. Gracias por ponerte en contacto.');
            limpiarFormulario();
            return true;  
        } else {
            alert('El correo electrónico es incorrecto. Asegúrate de incluir "@"');
        }
    } else {
        alert('Por favor, completa todos los campos obligatorios.');
    }

    return false;  
}

function limpiarFormulario() {
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('correo').value = '';
    document.getElementById('mensaje').value = '';
}
