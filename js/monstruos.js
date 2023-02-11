let ataqueJugador
let ataqueEnemigo

function iniciarJuego() {
    let botonMonstruoJugador = document.getElementById('boton-monstruo')
    botonMonstruoJugador.addEventListener('click', seleccionarMonstruoJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let BotonAgua =  document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let BotonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)
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
    } else if (inputPhairus.checked){
        spamMonstruoJugador.innerHTML = 'Phairus'
    }else {
        alert('Selecciona un Monstruo')    
    } 
    seleccionarMonstruoEnemigo()
}

function seleccionarMonstruoEnemigo(){
    let monstruoAleatorio = aleatorio(1,3)
    let spaMonstruoEnemigo = document.getElementById('monstruo-enemigo')

    if (monstruoAleatorio == 1) {
        spaMonstruoEnemigo.innerHTML ='leviathan'
    }else if (monstruoAleatorio == 2) {
        spaMonstruoEnemigo.innerHTML ='Peligarroso'
    }else {
        spaMonstruoEnemigo.innerHTML ='Phairus'
    }
    }
    
function ataqueFuego (){
    ataqueJugador ='Fuego'
    ataqueAleatorioEnemigo()
}
function ataqueAgua (){
    ataqueJugador ='Agua'
    ataqueAleatorioEnemigo()
}
function ataqueTierra (){
    ataqueJugador ='Tierra'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio =aleatorio(1,3)
    
    if (ataqueAleatorio == 1){
        ataqueEnemigo = 'Fuego'
    }else if (ataqueAleatorio == 2){
        ataqueEnemigo ='Agua'
    }else {
        ataqueEnemigo ='Tierra'
    }
    
}


function aleatorio(min,max) {
    return Math.floor(Math.random() * (max -min +1) +min)
}

window.addEventListener('load', iniciarJuego)