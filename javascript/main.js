//on écoute le chargement du DOM avec la méthode addEventListener et on exécute une fonction
document.addEventListener('DOMContentLoaded', function () {
    // Assigner une fonction à l'événement de défilement de la fenêtre
    window.onscroll = function() {
        scrollFunction();
    };

    // Fonction pour afficher ou masquer la flèche en fonction du défilement
    function scrollFunction() {
        var mybutton = document.getElementById("scrollToTop");
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            //le 20 correspond à la hauteur de la page avant que la flèche ne s'affiche
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

    // Fonction pour défiler vers le haut de la page lorsque l'utilisateur clique sur la flèche
    function topFunction() {
        document.body.scrollTop = 0; // Pour Safari
        document.documentElement.scrollTop = 0; // Pour Chrome, Firefox, IE et Opera
    }

    // Assigner la fonction au bouton
    document.getElementById("scrollToTop").onclick = topFunction;
});
