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


/* Knappen til top */ 

var btn = document.getElementById("topBtn");

window.onscroll = function() {
  // Check if user has scrolled past about 50% of the page height
  if (window.scrollY > document.documentElement.scrollHeight * 0.5) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

btn.onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};
