let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {
    let botonMonstruoJugador = document.getElementById('boton-monstruo')
    botonMonstruoJugador.addEventListener('click', seleccionarMonstruoJugador)
    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click',reinicarJuego)
}

function seleccionarMonstruoJugador() {
    let inputLeviathan = document.getElementById('leviathan')
    let inputPeligarroso = document.getElementById('peligarroso')
    let inputPhairus = document.getElementById('phairus')
    let spamMonstruoJugador = document.getElementById('monstruo-jugador')
    if (inputLeviathan.checked) {
        spamMonstruoJugador.innerHTML = 'Leviathan'
    } else if (inputPeligarroso.checked) {
        spamMonstruoJugador.innerHTML = 'Peligarroso'
    } else if (inputPhairus.checked) {
        spamMonstruoJugador.innerHTML = 'Phairus'
    } else {
        alert('Selecciona un Monstruo')
    }
    seleccionarMonstruoEnemigo()
}

function seleccionarMonstruoEnemigo() {
    let monstruoAleatorio = aleatorio(1, 3)
    let spaMonstruoEnemigo = document.getElementById('monstruo-enemigo')
    if (monstruoAleatorio == 1) {
        spaMonstruoEnemigo.innerHTML = 'leviathan'
    } else if (monstruoAleatorio == 2) {
        spaMonstruoEnemigo.innerHTML = 'Peligarroso'
    } else {
        spaMonstruoEnemigo.innerHTML = 'Phairus'
    }
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
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')
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
    let sectionMensajes = document.getElementById('mensajes')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'tu Monstruo ataco con' + ataqueJugador + ', el monstruo del enemigo ataco con ' + ataqueEnemigo + ' ' + resultado
    sectionMensajes.appendChild(parrafo)
}

function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById('mensajes')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal
    sectionMensajes.appendChild(parrafo)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function reinicarJuego(){
    location.reload()
}

window.addEventListener('load', iniciarJuego)