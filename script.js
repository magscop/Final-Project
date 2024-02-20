const navE1 = document.querySelector(".nav");
const hamburgerE1 = document.querySelector(".hamburger");

hamburgerE1.addEventListener("click", () => {
    navE1.classList.toggle("nav--open");
    hamburgerE1.classList.toggle("hamburger--open");

});

navE1.addEventListener("click", () => {
    navE1.classList.remove("nav--open");
    hamburgerE1.classList.remove("hamburger--open");

});

function showContent(tabId) {
    // Hide all content sections
    var contentSections = document.querySelectorAll('.content-section');
    contentSections.forEach(function(section) {
        section.classList.remove('active');
    });

    // Show the selected content section
    var selectedTab = document.getElementById(tabId);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
}

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  