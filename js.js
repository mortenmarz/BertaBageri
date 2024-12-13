
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
