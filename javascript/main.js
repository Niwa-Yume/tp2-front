document.addEventListener('DOMContentLoaded', function () {
    var scrollToTopButton = document.getElementById("scrollToTop");


    function scrollFunction() {
        if (window.scrollY > 20) {
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    }



    window.addEventListener('scroll', function () {
        scrollFunction();

        
        var fadeInElements = document.querySelectorAll('.fade-in');
        fadeInElements.forEach(function (element) {
            if (isInViewport(element)) {
                element.classList.add('in-view');
            }
        });
    });

    
    scrollToTopButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    
    scrollFunction();
    var fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach(function (element) {
        if (isInViewport(element)) {
            element.classList.add('in-view');
        }
    });
});
