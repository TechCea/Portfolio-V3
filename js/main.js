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

    document.addEventListener("DOMContentLoaded", () => {
        const burbujasContainer = document.querySelector('.burbujas');
        const numBurbujasAnimadas = 50;
        const numBurbujasEstaticas = 50;
    
        // Función para generar un número aleatorio entre un rango
        function getRandom(min, max) {
            return Math.random() * (max - min) + min;
        }
    
        // Crear burbujas estáticas
        for (let i = 0; i < numBurbujasEstaticas; i++) {
            const burbujaEstatica = document.createElement('div');
            burbujaEstatica.classList.add('burbuja-estatica');
            burbujaEstatica.style.left = `${getRandom(0, 100)}%`;
            burbujaEstatica.style.top = `${getRandom(0, 100)}%`;
            burbujasContainer.appendChild(burbujaEstatica);
        }
    });
    
    document.addEventListener('DOMContentLoaded', function() {
        const toggle = document.getElementById('theme-toggle');
        const icon = toggle.querySelector('i');
        const profilePicture = document.getElementById('profile-picture');
    
        
        const lightModeImages = [
            "img/Picture0-dark.png",
            "img/Picture0.1-dark.png",
            "img/Picture1-dark.png",
            "img/Picture2-dark.png",
            "img/Picture3-dark.png",
            "img/Picture4-dark.png",
            "img/Picture5-dark.png",
            "img/Picture6-dark.png",
            "img/Picture7-dark.png",
            "img/Picture8-dark.png",
            "img/Picture9-dark.png"
        ];
    
        const darkModeImages = [
            "img/Picture0.0-.png",
            "img/Picture0.1-.png",
            "img/Picture1-.png",
            "img/Picture2-.png",
            "img/Picture3-.png",
            "img/Picture4-.png",
            "img/Picture5-.png",
            "img/Picture6-.png",
            "img/Picture7-.png",
            "img/Picture8-.png",
            "img/Picture9-.png"
        ];
    
        let currentIndex = 0;
    let timer;
    let isLightMode = false;

    function updateProfilePicture() {
        const images = isLightMode ? lightModeImages : darkModeImages;
        profilePicture.src = images[currentIndex];
    }

    function changeImage() {
        currentIndex = (currentIndex + 1) % (isLightMode ? lightModeImages : darkModeImages).length;
        updateProfilePicture();
    }

    function startAnimation() {
        timer = setInterval(changeImage, 3000); // Cambia la imagen cada 3 segundos
    }

    function toggleTheme(event) {
        event.preventDefault();
        document.documentElement.classList.toggle('light-mode');
        isLightMode = document.documentElement.classList.contains('light-mode');

        if (isLightMode) {
            icon.classList.remove('bx-moon');
            icon.classList.add('bx-sun');
            toggle.setAttribute('data-label', 'Modo Claro');
            localStorage.setItem('theme', 'light');
        } else {
            icon.classList.remove('bx-sun');
            icon.classList.add('bx-moon');
            toggle.setAttribute('data-label', 'Modo Noche');
            localStorage.setItem('theme', 'dark');
        }

        // Actualizar la imagen del perfil inmediatamente al cambiar el tema
        updateProfilePicture();
    }

    // Recuperar el tema del localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.documentElement.classList.add('light-mode');
        isLightMode = true;
        icon.classList.remove('bx-moon');
        icon.classList.add('bx-sun');
        toggle.setAttribute('data-label', 'Modo Claro');
    } else {
        document.documentElement.classList.remove('light-mode');
        isLightMode = false;
        icon.classList.remove('bx-sun');
        icon.classList.add('bx-moon');
        toggle.setAttribute('data-label', 'Modo Noche');
    }

    // Iniciar la animación automáticamente cuando se carga la página
    startAnimation();
    updateProfilePicture(); // Asegurarse de que la imagen inicial sea la correcta

    toggle.addEventListener('click', toggleTheme);
});
    
    