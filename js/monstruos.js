function iniciarJuego() {
    let botonMonstruoJugador = document.getElementById('boton-monstruo')
    botonMonstruoJugador.addEventListener('click', seleccionarMonstruoJugador)
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
}

window.addEventListener('load', iniciarJuego)