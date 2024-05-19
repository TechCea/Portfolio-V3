document.addEventListener("DOMContentLoaded", function() {
    var typed = new Typed(".text", {
        strings: ["Frontend Developer", "Web Developer", "Systems Engineer"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
});
    window.onload = function() {
        // Vaciar los campos del formulario al cargar la página
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
        document.getElementById('contactForm').reset();
    };
    

    function changeImage(element, newSrc) {
        element.style.opacity = 1; // Establece la opacidad en 0 para desvanecer la imagen actual
        setTimeout(function() {
            element.src = newSrc; // Cambia la fuente de la imagen después de que la opacidad haya alcanzado 0
            // Restablece los estilos después de cambiar la imagen
            resetStyles(element);
            element.style.opacity = 1; // Restaura la opacidad a 1 para mostrar suavemente la nueva imagen
        }, 500); // Espera 500 milisegundos (0.5 segundos) antes de cambiar la imagen para que coincida con la duración de la transición en CSS
    }
    
    function resetStyles(element) {
        // Aquí puedes restablecer los estilos CSS según sea necesario
        element.style.width = 'auto'; // Por ejemplo, restablece el ancho
        element.style.height = 'auto'; // Por ejemplo, restablece la altura
    }


    var images = ["img/Picture1.png","img/Picture2.png","img/Picture2.2.png","img/Picture3.png","img/Picture4.png",
    "img/Picture5.png","img/Picture6.png","img/Picture7.png","img/Picture8.png","img/Picture9.png"];
    var currentIndex = 0;
    var timer;
    
    function startAnimation() {
        timer = setInterval(changeImage, 3000); // Cambia la imagen cada segundo
    }
    
    function changeImage() {
        var img = document.querySelector('.Foto');
        currentIndex = (currentIndex + 1) % images.length; // Incrementa el índice circularmente
        img.src = images[currentIndex]; // Cambia la imagen actual
    }
    
    // Iniciar la animación automáticamente cuando se carga la página
    startAnimation();
    
    document.addEventListener("DOMContentLoaded", function() {
        const imagePopups = document.querySelectorAll('.image-popup');
        const popups = document.querySelectorAll('.popup-container');
        
        imagePopups.forEach(function(image) {
            image.addEventListener('click', function() {
                const popupId = image.getAttribute('data-popup');
                const popup = document.getElementById(popupId);
                togglePopup(popup);
            });
        });
        
        popups.forEach(function(popup) {
            const closeButton = popup.querySelector('.close-btn');
            closeButton.addEventListener('click', function() {
                togglePopup(popup);
            });
        });
        
        function togglePopup(popup) {
            popup.classList.toggle('show');
        }
    });

    document.querySelector('.menu-toggle').addEventListener('click', function() {
        document.querySelector('.header').classList.toggle('menu-open');
    });

    