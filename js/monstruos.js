const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
// sectionReiniciar.style.display = 'none'
const botonMonstruoJugador = document.getElementById('boton-monstruo')
const botonFuego = document.getElementById('boton-fuego')
const botonAgua = document.getElementById('boton-agua')
const botonTierra = document.getElementById('boton-tierra')
const botonReiniciar = document.getElementById('boton-reiniciar')

const sectionSeleccionarMonstruo = document.getElementById('seleccionar-monstruo')

const spanMonstruosJugador = document.getElementById('monstruo-jugador')
const spanMonstruosEnemigo = document.getElementById('monstruo-enemigo')
const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataqueDelEnemigo = document.getElementById('ataques-del-enemigo')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')

let monstruos = []
let ataqueJugador
let ataqueEnemigo
let opcionDeMonstruos
let inputLeviathan
let inputPeligarroso
let inputPhairus
let monstruoJugador
let vidasJugador = 3
let vidasEnemigo = 3

class monstruo {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let leviathan = new monstruo('Leviathan', './gift/Leviathan.gif', 3)
let peligarroso = new monstruo('Peligarroso', './gift/tierra.gif', 3)
let phairus = new monstruo('Phairus', './gift/fuego.gif', 3)

leviathan.ataques.push({
    nombre: '💦',
    id: 'boton-agua'
}, {
    nombre: '💦',
    id: 'boton-agua'
}, {
    nombre: '💦',
    id: 'boton-agua'
}, {
    nombre: '🔥',
    id: 'boton-fuego'
}, {
    nombre: '🪨🪨',
    id: 'boton-tierra'
}, )

peligarroso.ataques.push({
    nombre: '🪨🪨',
    id: 'boton-agua'
}, {
    nombre: '🪨🪨',
    id: 'boton-agua'
}, {
    nombre: '🪨🪨',
    id: 'boton-agua'
}, {
    nombre: '💦',
    id: 'boton-agua'
}, {
    nombre: '🔥',
    id: 'boton-fuego'
}, )

phairus.ataques.push({
    nombre: '🔥',
    id: 'boton-agua'
}, {
    nombre: '🔥',
    id: 'boton-agua'
}, {
    nombre: '🔥',
    id: 'boton-agua'
}, {
    nombre: '💦',
    id: 'boton-fuego'
}, {
    nombre: '🪨🪨',
    id: 'boton-tierra'
}, )

monstruos.push(leviathan, peligarroso, phairus)

function iniciarJuego() {
    sectionSeleccionarAtaque.style.display = 'none'

    monstruos.forEach((monstruo) => {
        opcionDeMonstruos = `
        <input type="radio" name="monstruo" id=${monstruo.nombre} />
        <label class="tarjeta-de-monstruos" for=${monstruo.nombre}>
            <p>${monstruo.nombre}</p>
            <img src=${monstruo.foto} alt=${monstruo.nombre}>
        </label>
        `
        contenedorTarjetas.innerHTML += opcionDeMonstruos

        inputLeviathan = document.getElementById('Leviathan')
        inputPeligarroso = document.getElementById('Peligarroso')
        inputPhairus = document.getElementById('Phairus')
    })

    botonMonstruoJugador.addEventListener('click', seleccionarMonstruoJugador)

    botonFuego.addEventListener('click', ataqueFuego)

    botonAgua.addEventListener('click', ataqueAgua)

    botonTierra.addEventListener('click', ataqueTierra)

    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMonstruoJugador() {
    sectionSeleccionarMonstruo.style.display = 'none'

    sectionSeleccionarAtaque.style.display = 'flex'

    if (inputLeviathan.checked) {
        spanMonstruosJugador.innerHTML = inputLeviathan.id
            mascotaJugador = inputLeviathan.id
    } else if (inputPeligarroso.checked) {
        spanMonstruosJugador.innerHTML =  inputPeligarroso.id
            mascotaJugador = inputPeligarroso.id
    } else if (inputPhairus.checked) {
        spanMonstruosJugador.innerHTML = inputPhairus.id
            monstruoJugador = inputPhairus.id
    } else {
        alert('Selecciona un Monstruo')
    }

    extraerAtaques(monstruoJugador)
    seleccionarMonstruoEnemigo()
}

function extraerAtaques(mascotaJugador){
    let ataques
    for (let i = 0; i < monstruos.length; i++) {
       if (monstruoJugador ==  monstruos[i].nombre){
        ataques = monstruos[i].ataques
       }
    }
    console.log(ataques)
}

function seleccionarMonstruoEnemigo() {
    let monstruoAleatorio = aleatorio(0,monstruos.length -1)

    spanMonstruosEnemigo.innerHTML= monstruos[monstruoAleatorio].nombre
    }


function ataqueFuego() {
    ataqueJugador = 'Fuego'
    ataqueAleatorioEnemigo()
}

function ataqueAgua() {
    ataqueJugador = 'Agua'
    ataqueAleatorioEnemigo()
}

function ataqueTierra() {
    ataqueJugador = 'Tierra'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3)
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'Fuego'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'Agua'
    } else {
        ataqueEnemigo = 'Tierra'
    }
    combate()
}

function combate() {

    if (ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE")
    } else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }
    revisarVidas()
}

function revisarVidas() {
    if (vidasEnemigo == 0) {
        crearMensajeFinal('FELICITACIONES GANASTE 🐱‍🐉')
    } else if (vidasJugador == 0) {
        crearMensajeFinal('LO SIENTO PERDISTE')
    }
}

function crearMensaje(resultado) {


    let nuevoAtaquesDelJugador = document.createElement('p')
    let nuevoAtaquesDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaquesDelJugador.innerHTML = ataqueJugador
    nuevoAtaquesDelEnemigo.innerHTML = ataqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaquesDelJugador)
    ataqueDelEnemigo.appendChild(nuevoAtaquesDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    sectionMensajes.innerHTML = resultadoFinal
    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true
    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
window.addEventListener('load', iniciarJuego)