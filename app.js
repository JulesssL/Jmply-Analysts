const allCartes = document.querySelectorAll('flip-container');

allCartes.forEach(carte => {
    carte.addEventListener('click', () => {
        carte.classList.toggle('flip');
    });
});