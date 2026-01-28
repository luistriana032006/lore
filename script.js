// Función para crear pétalos y girasoles cayendo
function createPetal() {
    const symbols = ['🌸', '🌹', '🌻', '✨', '💙'];
    const petal = document.createElement('div');
    petal.classList.add('petal');
    petal.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];

    // Posición aleatoria
    petal.style.left = Math.random() * 100 + 'vw';
    // Tamaño aleatorio
    petal.style.fontSize = (Math.random() * 20 + 10) + 'px';
    // Duración aleatoria
    const duration = Math.random() * 5 + 5;
    petal.style.animation = `fall ${duration}s linear forwards`;

    document.body.appendChild(petal);

    // Eliminar después de la animación
    setTimeout(() => {
        petal.remove();
    }, duration * 1000);
}

// Crear elementos cada cierto tiempo
setInterval(createPetal, 400);

// Mensaje de bienvenida en consola
console.log("¡Página cargada con éxito para Lorena!");
