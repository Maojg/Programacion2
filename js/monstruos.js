function iniciarJuego(){
let botonMonstruoJugador = document.getElementById('boton-monstruo')
botonMonstruoJugador.addEventListener('click', seleccionarMonstruoJugador)
}

function seleccionarMonstruoJugador(){
    if(document.getElementById('gaiagua').checked) {
        alert('seleccionaste a Gaiagua')
    }
}




window.addEventListener('load', iniciarJuego)