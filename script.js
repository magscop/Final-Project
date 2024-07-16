const words = ["functional.", "beautiful.", "intuitive.", "accessible."];
const animatedWord = document.getElementById('animated-word');

// Function to change word
function changeWord() {
    let currentIndex = 0;

    setInterval(() => {
        animatedWord.textContent = words[currentIndex];
        currentIndex++;

        if (currentIndex >= words.length) {
            currentIndex = 0;
        }
    }, 1500); // Change word every 3 seconds (3000 milliseconds)
}

// Call function to start changing words
changeWord();



document.addEventListener('DOMContentLoaded', function() {
    const projects = document.querySelectorAll('.project');

    projects.forEach(function(project) {
        project.addEventListener('click', function() {
            // Remove 'big' class from all projects
            projects.forEach(function(proj) {
                proj.classList.remove('big');
            });

            // Add 'big' class to the clicked project
            project.classList.add('big');
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-5 a');
    const projects = document.querySelectorAll('.project');

    menuItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            const tag = this.getAttribute('data-tag');

            projects.forEach(project => {
                if (tag === 'all' || project.getAttribute('data-tag').includes(tag)) {
                    project.classList.remove('hidden');
                } else {
                    project.classList.add('hidden');
                }
            });
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-5 a');
    const projects = document.querySelectorAll('.project');

    menuItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            const tag = this.getAttribute('data-tag');

            // Remove active class from all menu items
            menuItems.forEach(menuItem => menuItem.classList.remove('active'));

            // Add active class to the clicked menu item
            this.classList.add('active');

            // Filter projects based on the selected tag
            projects.forEach(project => {
                const projectTags = project.getAttribute('data-tag').split(',');
                if (tag === 'all' || projectTags.includes(tag)) {
                    project.classList.remove('hidden');
                } else {
                    project.classList.add('hidden');
                }
            });
        });
    });
});


const flipContainer = document.getElementById('flip-container');

flipContainer.addEventListener('click', function() {
    if (!this.classList.contains('flipped')) {
        this.classList.add('flipped');
        setTimeout(() => {
            this.classList.add('paused');
        }, 3000); // Pause after 3 seconds
    } else {
        this.classList.remove('flipped');
        this.classList.remove('paused');
    }
});


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


document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('nav_active');
        hamburger.classList.toggle('active');
    });
});
