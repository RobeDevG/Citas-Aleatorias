let botonElem = document.getElementById('boton-cambiar-de-cita');
let citaElem = document.getElementById('cita');
let autorElem = document.getElementById('autor');

function generarEnteroAleatorio(max) {
  //no cuenta el valor maximo
  return Math.floor(Math.random() * max);
  
}
function cambiarCita() {
  let indiceAleatorio = generarEnteroAleatorio(citas.length);
  citaElem.innerText = `"${citas[indiceAleatorio].texto}"`;
  autorElem.innerText = citas[indiceAleatorio].autor;
}
cambiarCita();

botonElem.addEventListener('click', cambiarCita);

