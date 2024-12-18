document.addEventListener('DOMContentLoaded', function () {
    /* Custom cursor */
    const customCursor = document.querySelector('.custom-cursor');
    if (customCursor) {
        let cursorX = 0;
        let cursorY = 0;

        document.addEventListener('mousemove', (e) => {
            cursorX = e.clientX;
            cursorY = e.clientY;
            customCursor.style.left = `${cursorX - 20}px`;
            customCursor.style.top = `${cursorY - 20}px`;
        });

        document.querySelectorAll('a').forEach(link => {
            link.style.cursor = 'none';
        });
    }

    /* Fade ind effekt */
    const fadeElements = document.querySelectorAll('.fade');
    if (fadeElements.length > 0) {
        window.addEventListener('scroll', function () {
            fadeElements.forEach(element => {
                const rect = element.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                if (rect.top < windowHeight && rect.bottom > 0) {
                    element.classList.add('visible');
                }
            });
        });
    }

    /* Pil der scroller ned på midten af forsiden */
    const scrollArrow = document.getElementById('scroll-arrow');
    if (scrollArrow) {
        scrollArrow.onclick = function () {
            const logoSection = document.querySelector('.logo-section');
            if (logoSection) {
                logoSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        };
    }

    /* Knappen til top */
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (scrollToTopBtn) {
        scrollToTopBtn.style.display = 'none';

        window.addEventListener('scroll', function () {
            const scrollPosition = window.scrollY + window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            if (scrollPosition > documentHeight * 0.5) {
                scrollToTopBtn.style.display = 'block';
            } else {
                scrollToTopBtn.style.display = 'none';
            }
        });

        scrollToTopBtn.onclick = function (event) {
            event.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        };
    }
});
