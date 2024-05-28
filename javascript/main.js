document.addEventListener('DOMContentLoaded', function () {
    var scrollToTopButton = document.getElementById("scrollToTop");

    // Function to show or hide the scroll to top button
    function scrollFunction() {
        if (window.scrollY > 20) {
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    }

    // Function to check if an element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Add scroll event listener
    window.addEventListener('scroll', function () {
        scrollFunction();

        // Get all elements with class fade-in
        var fadeInElements = document.querySelectorAll('.fade-in');
        fadeInElements.forEach(function (element) {
            if (isInViewport(element)) {
                element.classList.add('in-view');
            }
        });
    });

    // Add click event listener to scroll to top button
    scrollToTopButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Initial check to show elements already in view
    scrollFunction();
    var fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach(function (element) {
        if (isInViewport(element)) {
            element.classList.add('in-view');
        }
    });
});
