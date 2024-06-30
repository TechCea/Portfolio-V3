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

    
    
    document.addEventListener('DOMContentLoaded', function() {
        const toggle = document.getElementById('theme-toggle');
        const icon = toggle.querySelector('i');
        const profilePicture = document.getElementById('profile-picture');
    
        
        const lightModeImages = [
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
    
        const darkModeImages = [
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
    
fetch('./js/projects.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => buildPortfolio(data))
        .catch(error => console.error('There has been a problem with your fetch operation:', error));

    function buildPortfolio(projectsArr) {
        console.log('projectsArr:', projectsArr);
        let projects = [...projectsArr];
        projects.sort(function (a, b) {
            return b.rating - a.rating;
        });

        projects = projects.slice(0, 6);

        let container = document.querySelector(".elements");
        console.log('container:', container);

        for (const project of projects) {
            let element = document.createElement("div");
            element.classList.add("element");
            element.classList.add("a");
            element.classList.add("glass");
            element.setAttribute("dataID", project.id);
            let img = document.createElement("img");
            img.src = project.logo;
            element.appendChild(img);
            container.appendChild(element);
            console.log('Added element:', element);
        }

        portfolio(projectsArr);
    }

    function portfolio(arrayData) {
        let elements = [...document.getElementsByClassName('element')];
        elements.forEach(function (e) {
            e.addEventListener("click", () => {
                let banner = document.createElement("div");
                if (parseInt(e.getAttribute("dataID")) === 1) {
                    banner.classList.add("banner-custom");
                }
                let width = e.offsetWidth;
                let height = e.offsetHeight;
                let x = e.offsetTop;
                let y = e.offsetLeft;

                banner.style.top = x + "px";
                banner.style.left = y + "px";
                banner.style.width = width + 'px';
                banner.style.height = height + 'px';
                banner.style.padding = '0';
                banner.classList.add("banner");

                let content = document.createElement("div");
                content.classList.add("content");

                let closeButton = document.createElement("button");
                closeButton.classList.add("close-btn");
                closeButton.innerHTML = "&times;";
                closeButton.addEventListener("click", goBackElements);
                content.appendChild(closeButton);

                let h2 = document.createElement("h3");
                h2.innerText = arrayData[e.getAttribute("dataID")].name;
                content.appendChild(h2);
                let p = document.createElement("p");
                p.innerHTML = arrayData[e.getAttribute("dataID")].description;
                content.appendChild(p);
                let tech = document.createElement("div");
                tech.classList.add("skills-used");
                const arrayTech = arrayData[e.getAttribute("dataID")].technologies;
                for (const el of arrayTech) {
                    let skill = document.createElement("div");
                    skill.classList.add("skill");
                    let img = document.createElement("img");
                    img.src = "img/icons/" + el + '.svg';
                    let title = document.createElement("span");
                    title.textContent = el;
                    skill.appendChild(img);
                    skill.appendChild(title);
                    tech.appendChild(skill);
                }
                content.appendChild(tech);

                // Crear el contenedor de botones
                let buttonContainer = document.createElement("div");
                buttonContainer.classList.add("button-container");

                // Añadir botón "Take a look"
                let link = document.createElement("a");
                link.classList.add("link", "btn-primary");
                link.href = arrayData[e.getAttribute("dataID")].link || "#"; // Puedes agregar un enlace por defecto si no hay enlace
                link.setAttribute("target", "_blank");
                link.innerText = "Take a look";
                buttonContainer.appendChild(link);

                // Añadir botón de GitHub
                let githubLink = document.createElement("a");
                githubLink.classList.add("link", "btn-secondary");
                githubLink.href = arrayData[e.getAttribute("dataID")].github || "#"; // Puedes agregar un enlace por defecto si no hay GitHub
                githubLink.setAttribute("target", "_blank");

                let githubIcon = document.createElement("img");
                githubIcon.src = "img/icons/GitHub.svg";
                githubIcon.alt = "GitHub";
                githubIcon.style.width = "44px";
                githubIcon.style.height = "44px";
                githubLink.appendChild(githubIcon);

                buttonContainer.appendChild(githubLink);

                content.appendChild(buttonContainer);

                let spacingMobile = document.createElement("span");
                spacingMobile.classList.add('separatorMobile');
                content.appendChild(spacingMobile);

                banner.appendChild(content);
                document.querySelector('.elements').appendChild(banner);

                if (arrayData[e.getAttribute("dataID")].backgroundImage) {
                    banner.style.backgroundImage = `url(${arrayData[e.getAttribute("dataID")].backgroundImage})`;
                    banner.style.backgroundSize = 'cover';
                    banner.style.backgroundPosition = 'center';
                    banner.classList.add("banner-with-bg");
                } else {
                    banner.style.backgroundColor = arrayData[e.getAttribute("dataID")].backgroundColor || '#ffffff';
                }

                banner.classList.add("banner-expanded");

                setTimeout(() => {
                    content.classList.add("visible");
                }, 1000);
            });
        });

        function goBackElements() {
            let banner = document.querySelector('.banner');
            banner.classList.add("hide");
            setTimeout(() => {
                banner.remove();
            }, 500);
        }
    }

