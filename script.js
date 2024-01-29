document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".hamburger-menu");
    const menu = document.querySelector(".menu");

    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
});


function confirmPurchase() {
    var confirmMessage = "¿Desea comprar el producto?";
    if (confirm(confirmMessage)) {
        alert("¡Compra realizada con éxito!");
    } else {
        alert("Compra cancelada.");
    }
}

// Registro
const registroInicial = [
    { 
        Nombre: 'S-Works Turbo Levo SL',
        Modelo: 'Levo SL',
        Marca:'Specialized',
        Precio: 49400,
        Img: 'S-Works Turbo Levo SL.webp',
        Especificaciones:{},
        Video: 'https://www.youtube.com/embed/b2VxE8FEfl4?si=0PWhEDJwBNYvS_0k', 
        Origen:'https://specializedperu.com/collections/turbo-e-bikes-montana/products/levo-sl-sw-carbon-175105?variant=42477806420162'
    },
    {
        Nombre: 'Sku TrekProcaliber95_2024',
        Modelo: 'Procaliber',
        Marca:'Trek',
        Precio: 9490,
        Img: 'Sku TrekProcaliber95_2024.webp',
        Especificaciones:{},
        Video: 'https://www.youtube.com/embed/Zof45dQWeSo?si=8OJJoVnzs4wo_WF_',
        Origen:'https://sparta.pe/p/procaliber-9-5/'
    },
    {
        Nombre: 'Bicicleta Giant Talon 3 2021 - M',
        Modelo: 'Talon',
        Marca:'Giant',
        Precio: 3300,
        Img: 'Bicicleta Giant Talon 3 2021 - M.webp',
        Especificaciones:{},
        Video: 'https://www.youtube.com/embed/J1wWSAKNvPM?si=16nHWM-S1jz-KYmT',
        Origen:'https://bicixperu.com/product/bicicleta-giant-talon-3-2021/'
    },
    {
        Nombre: 'Aventon Cordoba',
        Modelo: 'Cordoba',
        Marca:'Aventon',
        Precio: 2499,
        Img: 'aventon cordoba.webp',
        Especificaciones:{},
        Video: 'https://www.youtube.com/embed/GmA3g_hXXAg?si=AlBqS8KRZAu4Jd6g',
        Origen:'https://anzabikes.com/collections/bicicletas/products/aventon-cordoba'
    },
    {
        Nombre: 'Fixie',
        Modelo: 'Fixie',
        Marca:'Anza',
        Precio: 999,
        Img: 'fixie anza.jpg',
        Especificaciones:{},
        Video: 'https://www.youtube.com/embed/ArhYt-JexaE?si=4IIVH5-1ezDUahHF',
        Origen:''
    },
    {
        Nombre: 'Montañera seva deck 2.0',
        Modelo: 'Seva deck 2.0',
        Marca:'Jafi',
        Precio: 2500,
        Img: 'seva deck 2.0.jpg',
        Especificaciones:{},
        Video: 'https://www.youtube.com/embed/jfEdJ_9Bw8Q?si=4SChb6lUrMewPjyM',
        Origen:''
    }
/*     {
        Nombre: '',
        Modelo: '',
        Marca:'',
        Precio: 0,
        Img: '',
        Especificaciones:{},
        Video: '',
        Origen:''
    } */
];



document.addEventListener('DOMContentLoaded', () => {
    const botonCupon = document.getElementById('cuponDescuento');
    const tarjetaElements = document.getElementsByClassName('tarjeta');
    const titleProducto = document.getElementById('titleProducto');
    const descripcionProducto = document.getElementById('descripcionProducto');
    const especificacionesProducto = document.getElementById('especificacionesProducto');
    const secOrigenInfo = document.getElementById('origenInfo');
    const origenInfo = parseInt(secOrigenInfo.textContent);
    const elemVideoInfo = document.getElementById('iframeVideo');
    sistemaDescuento(botonCupon);
});

var arrayNubeJSON = localStorage.getItem('Registro');

if (arrayNubeJSON !== null){
    var arrayNube = JSON.parse(arrayNubeJSON);
} else {
    localStorage.setItem('Registro', JSON.stringify(registroInicial));
    var arrayNubeJSON = localStorage.getItem('Registro');
    var arrayNube = JSON.parse(arrayNubeJSON);
}



console.log(arrayNube);

addEventListener('DOMContentLoaded', ()=>{

    plasmar();
})

function plasmar (){
    for (const [i, valor] of arrayNube.entries()) {
        const div = document.createElement('div');
        div.classList += 'tarjeta';
        trabajarSubElementos(div,i , valor);
        añadirleFuncionalidades(div, valor);
        const grid = document.getElementById('contenedorGrid');
        grid.appendChild(div);
    }
}

function trabajarSubElementos(div, i, valor) {
    div.innerHTML = `
    <div class="elementMarca">${valor.Marca}</div>
    <div class="elementModelo">${valor.Modelo}</div>
    <div class="elementEtiqueta">${valor.Precio}</div>
    <div class="origenCard">${i}</div>
    `;

    div.style.backgroundImage = `url("recursos/imagenesProductos/${valor.Img}")`;
}

function añadirleFuncionalidades(div, valor){
    div.addEventListener('click', () => {
        titleProducto.innerHTML = `<h3>"${valor.Nombre}"</h3>`;
        descripcionProducto.innerHTML = 
        `<div id='contenedorMaquetaInfo'>
            <div>
                <h4 class='maquetaInfo'>Marca:</h4>
                <p class='maquetaInfo'>${valor.Marca}</p>
            </div>
            <div>
                <h4 class='maquetaInfo'>Modelo:</h4>
                <p class='maquetaInfo'>${valor.Modelo}</p>
            <div>
        </div>`;    
        iframeVideo.src = valor.Video;

    });
}

function añadirCard(){
    const nombre = prompt('Nombre: ');
    const marca = prompt('Marca: ');
    const modelo = prompt('Modelo: ');
    const precio = parseInt(prompt('Precio: '));
    const imagen = prompt('URL local o web: ');
    const nuevoObjeto = {
        Nombre: nombre,
        Modelo: modelo,
        Marca: marca,
        Precio: precio,
        Img: imagen
    };
    arrayNube.push(nuevoObjeto);
    localStorage.setItem('Registro', JSON.stringify(arrayNube))
    location.reload();
}
/*     {
        modelo: "Mountain Bike",
        marca: "BikeMaster",
        color: "Rojo",
        precio: 500,
        especificaciones: {
            cuadro: "Aluminio",
            frenos: "Disco hidráulico",
            suspension: "Amortiguación delantera",
            cambios: 21
        }
    } 
1.1  1-Specialized
1.2 2-Scott
1.3 3-Trek
1.4 4-Giant
1.5 5-Canyon
1.6 6-Cannondale
1.7 7-Orbea
1.8 8-BMC
1.9 9-Pinarello
1.10 10-Bianchi
    */





function sistemaDescuento(botonCupon) {
    botonCupon.addEventListener('click', oferta);
    const codeDescuentos = ['innovadores','tecsup','123'];

    function oferta() {
        const entrada = prompt('Ingrese el código de descuento');
        const valido = codeDescuentos.some((element) => {
            return element === entrada;
        });
        console.log(valido);
        if (valido){
            aplicar();
            alert('Código valido');
        } else {
            alert('Código invalido');
        }
    }

    function aplicar(){
            const origenes = document.getElementsByClassName('origenCard');
            console.log(origenes);
            for (const element of origenes){
                const origenCardx = parseInt(element.textContent); 
                if (isNaN(origenCardx)){
                } else {
                    const a = origenInfoActual();
                    if (origenCardx == a){
                        const tarjetaDescuentada = element.parentNode;
                        const divCreado = document.createElement('div');
                        divCreado.classList += 'verDescuento';
                        divCreado.textContent = '-10%';
                        tarjetaDescuentada.appendChild(divCreado);
                    }
                }
            }
    }

    function origenInfoActual() {
        const secOrigenInfo = document.getElementById('origenInfo');
        const orInfoAct = parseInt(secOrigenInfo.textContent);
        return orInfoAct;
    }
}



