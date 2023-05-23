function cambiarModo() { 
    var cuerpoweb = document.body; 
    cuerpoweb.classList.toggle("oscuro"); 
    // Guardar el estado del tema en localStorage
    if (cuerpoweb.classList.contains('oscuro')) {
        localStorage.setItem('modo-oscuro', 'activo');
    } else {
        localStorage.setItem('modo-oscuro', 'inactivo');
    }
} 

// Aplicar el modo oscuro guardado en localStorage, si existe
const modoOscuroGuardado = localStorage.getItem('modo-oscuro');
if (modoOscuroGuardado === 'activo') {
  document.body.classList.add('oscuro');
} else {
  document.body.classList.remove('oscuro');
}

// Actualizar el estado del botón de modo oscuro
function actualizarBotonModo() {
    const modoOscuroGuardado = localStorage.getItem('modo-oscuro');
    const botonModo = document.querySelector('.theme-switch input[type="checkbox"]');
    if (modoOscuroGuardado === 'activo') {
      botonModo.checked = true;
    } else {
      botonModo.checked = false;
    }
  }
  
// Llamar a la función de actualización del botón de modo oscuro al cargar la página
actualizarBotonModo();

// Event listener para el click en el botón flotante para ir al inicio
$('.boton-flotante').click(function(){
  // Animación para desplazarse al inicio de la página
	$('body, html').animate({
		scrollTop: '0px'
	}, 300);
});

// Event listener para el scroll de la ventana
$(window).scroll(function(){
	if( $(this).scrollTop() > 0 ){
    // Si la posición de desplazamiento es mayor que 0, mostrar el botón flotante deslizándolo hacia abajo
		$('.boton-flotante').slideDown(300);
	} else {
    // De lo contrario, ocultar el botón flotante deslizándolo hacia arriba
		$('.boton-flotante').slideUp(300);
	}
});








