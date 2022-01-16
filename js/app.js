document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
});

function iniciarApp(){
    crearGaleria(); 
}
function crearGaleria(){    
    const galeria = document.querySelector('.galeria-imagenes');

    for(let i = 1; i <= 12; i++){
        const imagen = document.createElement('picture');
        imagen.innerHTML = `
        <source srcset="img/galeria/thumb/${i}.avif" type="image/avif">
        <source srcset="img/galeria/thumb/${i}.webp" type="image/webp">
        <img loading="lazy" width="200" height="300" src="img/galeria/thumb/${i}.jpg" alt="Imagen Vocalista">
        `;

        imagen.onclick = function(){
            mostrarImagen(i);
        }

        galeria.appendChild(imagen);
    }
} 

function mostrarImagen(id){
    const imagen = document.createElement('picture');
        imagen.innerHTML = `
        <source srcset="img/galeria/grande/${id}.avif" type="image/avif">
        <source srcset="img/galeria/grande/${id}.webp" type="image/webp">
        <img loading="lazy" width="200" height="300" src="img/galeria/grande/${id}.jpg" alt="Imagen Vocalista">
        `;
        //CREA OVERLAY A LA IMAGEN
        const overlay = document.createElement('DIV');
        overlay.appendChild(imagen);
        overlay.classList.add('overlay');

        //BOTON PARA CERRAR LA IMAGEN (VENTANA MODAL)

        const cerrarModal = document.createElement('P');
        cerrarModal.textContent = 'X';
        cerrarModal.classList.add('btn-cerrar');
        cerrarModal.onclick = function(){
            overlay.remove();
            const body = document.querySelector('body');
            body.classList.remove('fijar-body');
        }
        overlay .onclick = function(){
            overlay.remove();
            const body = document.querySelector('body');
            body.classList.remove('fijar-body');
        }
        overlay.appendChild(cerrarModal);

        //AÑADIRLO AL HTML
        const body = document.querySelector('body');
        body.appendChild(overlay);
        body.classList.add('fijar-body');
}