window.addEventListener('scroll', function() {
    const fadeElements = document.querySelectorAll('.fade');
    fadeElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight && rect.bottom > 0) {
            element.classList.add('visible');
        } else {
            // Fjerner ikke 'visible' klasse for at undgå fade ud effekt
            // element.classList.remove('visible'); // Denne linje er fjernet
        }
    });
});

