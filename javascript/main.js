document.addEventListener('DOMContentLoaded', function () {
    var scrollToTopButton = document.getElementById("scrollToTop");

    // Fonction pour afficher ou cacher le bouton
    function scrollFunction() {
    console.log('FONCTION APPELEE');
        if (window.scrollY > 20) {
            scrollToTopButton.style.display = "block";
            console.log('>BOUTON AFFICHE');
        } else {
            scrollToTopButton.style.display = "none";
            console.log('BOUTON CACHE');
        }
    }

    // Ajout d'un événement de défilement
    window.addEventListener('scroll', scrollFunction);

    // Ajout d'un événement de clic sur le bouton pour remonter
    scrollToTopButton.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        console.log('BOUTON CLIQUE');
    });

    // Initialisation de l'état du bouton
    scrollFunction();
});
