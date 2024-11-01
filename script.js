function mostrarCarta() {
    const cartas = [
        "Eres la razón de mi sonrisa.",
        "Cada día a tu lado es un regalo.",
        "Te amo más de lo que las palabras pueden expresar.",
        "Eres mi todo, mi amor eterno.",
        "Contigo, cada momento es especial."
    ];
    const carta = document.getElementById('carta');
    carta.style.display = 'block'; // Mostrar la carta
    carta.innerText = cartas[Math.floor(Math.random() * cartas.length)];
}