/* Pil der scroller ned på midten af forsiden */

document.getElementById("scroll-arrow").onclick = function () {
    document.querySelector(".logo-section").scrollIntoView({ behavior: "smooth", block: "center" });
};


/* Fade ind effekt */

window.addEventListener('scroll', function() {
    const fadeElements = document.querySelectorAll('.fade');
    fadeElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight && rect.bottom > 0) {
            element.classList.add('visible');
        }
    });
});


/* Knappen til top */ 

const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.onscroll = function() {
    const scrollPosition = window.scrollY + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight; 

    
    if (scrollPosition > documentHeight * 0.5) {
        scrollToTopBtn.style.display = 'block'; 
    } else {
        scrollToTopBtn.style.display = 'none'; 
    }

};

scrollToTopBtn.onclick = function(event) {
    event.preventDefault(); 
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
};

scrollToTopBtn.style.display = 'none';



